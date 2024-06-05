import './main.css';
import './About.css';

import React, {useState, useEffect, useRef} from 'react';

import { useLocation } from 'react-router-dom';

import profile1 from './img/saqifprofessional.png';
import profile2 from './img/jeffpro.png';
import profile3 from './img/andrewpro.png';

import aboutImage from "./img/collegeofengineering.jpg";

const events = ["Data Collection", "Your water data", "Our team will reach out to request all the necessary bills, data, and other documents for our analysis. Throughout the process timeline, we will maintain clear communication to ensure we have what we need to properly serve the district and reduce costs.",
    "Analysis","Detecting inefficiencies","Here, we begin our work and utilize our methods to find out the most efficient ways for the district to reduce operating costs. Our data-driven analysis methods have consistently cut down costs for the districts they've been done on, so you won't have to worry about the effectiveness of our procedures.",
    "Presentation","Fixing the problem","When our analysis is completed, the main recommendations will be given via presentation through a scheduled meeting. A complete comprehensive list of our actionable insights and instructions will be provided as well. Proper communication with the district is our top priority throughout this stage."]

const names = ["Mirza Ushyair", "Jeffrey Yan", "Andrew Wang"]
const descriptions = ["Mirza Ushyair is a Mechanical Engineering graduate and research intern for University of California Riverside’s CE-CERT. His team, led by Dr. Sadrul Ula, focuses on R&D solutions to promote saving by investigating energy generation and storage. Notable projects include data analytics for Southern California Water Districts, motor testing for CalTestBed, and smart grid integration using photovoltaics and battery management.", 
                "Jeffrey Yan is a Master's student studying Data Science at the University of Colorado Boulder. During his work as a data analyst, he has extracted meaningful insights from marketing data, enhancing campaign performance and achieving a 15% boost in outreach. With a background in data analysis and a record of driving impactful results, Jeffrey excels in leveraging analytical tools to obtain actionable insights. Notable projects include developing predictive models for real estate pricing and air quality analyses.", 
                "Andrew Wang is a computer science graduate from the University of California Irvine, specializing in intelligent systems. His software background focuses on user centered development, emphasizing a seamless experience for users and responsive results for clients. Notable projects include machine learning models for stock trading, and backend database optimization on various cloud services."]

const pics = [profile1,profile2,profile3];

function About() {

    const scrollToRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        console.log(scrollToRef);
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        if (location.hash === '#team') {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        window.addEventListener('scroll',aboutTransitions);
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);

        return () => {
            window.removeEventListener('scroll', aboutTransitions);
        };


    },[]);


    const [showNewInfo, setShowNewInfo] = useState(true);
    const [currentEvent, setCurrentEvent] = useState(0);
    const [timelineText,setTimelineText] = useState(events[0]);
    const [timelineInfo,setTimelineInfo] = useState(events[2]);

    const changeTimeline = (i) =>{
        const timeline = document.querySelector('.timeline');
        for(let childIndex = 0;childIndex < timeline.childNodes.length;childIndex++){
            const child = timeline.childNodes[childIndex];
            if(childIndex===i+1){
                child.classList.add('timelineHighlight');
            }else{
                child.classList.remove('timelineHighlight');
            }
        }
        
        if(i===currentEvent) return;
        const newContent = events[3 * i + 2];
        setShowNewInfo(false);
        
        
        
        setTimeout(() => {
            setTimelineInfo(newContent);

            setTimelineText(events[3 * i]);

            setCurrentEvent(i);

            setShowNewInfo(true);
        }, 300); 

    };


    const [profileIndex,setProfileIndex] = useState(0)

    const changeProfile = (i) =>{
        
        let nav = document.getElementById("carouselNav");
        let wrapper = document.getElementById("carouselWrapper");
        let pictures = document.getElementById("profileContainer");
        
        for(let x=0;x<nav.children.length;x++){
            if(i===x){
                nav.children[x].classList.add("highlight");
                wrapper.classList.add("fade");
                setTimeout(() => {
                    setProfileIndex(i);
                    wrapper.classList.remove("fade");
                    pictures.children[x].classList.remove("hidePic");
                }, 220);
            }else{
                nav.children[x].classList.remove("highlight");
                setTimeout(() => {
                    pictures.children[x].classList.add("hidePic");
                }, 100);
                
            }
        }

        
    };

    return (
        <div className={"encompass fade"}>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    About Us
                </div>
            </div>

            <div className={"aboutBanner"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>UC Riverside</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"}>
                        Our company originates from a research team working directly for the University of California - Riverside, led by Dr Sadrul Ula, 
                        Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering.
                        <br/><br/>
                        Under the University's programs, we have already served various water districts across Southern California, allowing them to operate under more efficient conditions and scheduling.

                    </div>
                    <div className='spacer'/>
                </div>
                <div className={"forty"}>
                    <img src = {aboutImage} className={"aboutImage"}/>
                </div>
            </div>

            <div className='spacer'/>

            <div className={"centerHeader"}>THE PROCESS</div>
            <div className={"separateBar"}/>
            <div className = "culture">
                <div className = "timelineContainer" id = "timeline">
                    <div className="timeline">
                        <div className="timelineBar"></div>
                        <div className="timeline-item timelineHighlight">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(0)}>
                                <h3>{events[0]}</h3>
                                <p>{events[1]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(1)}>
                                <h3>{events[3]}</h3>
                                <p>{events[4]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(2)}>
                                <h3>{events[6]}</h3>
                                <p>{events[7]}</p>
                            </div>
                        </div>
                        <div className="timelineBar"></div>
                    </div>
                </div>
                <div className = "cultureInfo" id = "cultureInfo">
                    <div className="event">
                        {timelineText}
                    </div>
                    <div id = "currentInfo" className={`new-info ${showNewInfo ? 'reveal3' : ''}`}>
                        {timelineInfo}
                    </div>
                </div>
            </div>

            <div className='spacer'/>

            <div className={"centerHeader"} id = "team" ref={scrollToRef}>OUR FOUNDERS</div>
            <div className={"separateBar"}/>
            <div className='carouselContainer'>
                <div id='carouselNav'>
                        <div className='carouselNavSection highlight' onClick = {()=>changeProfile(0)}>{names[0]}</div>
                        <div className='carouselNavSection' onClick = {()=>changeProfile(1)}>{names[1]}</div>
                        <div className='carouselNavSection' onClick = {()=>changeProfile(2)}>{names[2]}</div>
                </div>
                <div className = "carousel" data-aos="zoom-out-up">
                    <div id = "carouselWrapper">
                        <div className={"fifty center"}>
                            <div id = "profileContainer">
                                <img id={"profileImage"} src = {pics[0]} alt = "Profile of one of the founders"/>
                                <img id={"profileImage"} className = {"hidePic"}  src = {pics[1]} alt = "Profile of one of the founders"/>
                                <img id={"profileImage"} className = {"hidePic"}  src = {pics[2]} alt = "Profile of one of the founders"/>
                            </div>

                        </div>
                        <div className={"fifty"}>
                            <div className={"leftHeader"}>{names[profileIndex]}</div>
                            <div className={"profileText"}>
                                <p>{descriptions[profileIndex]}</p>
                            </div>
                            <div className='spacer'/>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

            <div className='spacer2'/>
        </div>

    );




    function aboutTransitions() {
        if (document.documentElement.scrollTop > 650){

            document.getElementById('timeline').classList.add('reveal2');
            setTimeout(() => {
                try{
                    document.getElementById('cultureInfo').classList.add('reveal2');
                    const timelineContents = document.querySelectorAll('.timeline-content');
                    let index = 0;
                    timelineContents.forEach(element =>{
                        setTimeout(() =>{
                            element.classList.add('reveal');
                        }, 200 * index);
                        index++;
                        
                    });
                }catch(x){

                }
                
            }, 360);
            
            
        }

    }

}

export default About;

