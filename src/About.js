import './main.css';
import './About.css';

import React, {useState, useEffect, useRef} from 'react';

import { useLocation } from 'react-router-dom';

import profile1 from './img/temppro.png';
import profile2 from './img/temppro.png';
import profile3 from './img/temppro.png';

import aboutImage from "./img/collegeofengineering.jpg";

const events = ["Data Collection", "Your water data", "Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Analysis","Detecting inefficiencies","Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Presentation","Fixing the problem","Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]

const names = ["Saqif Ushyair", "Jeffrey Yan", "Andrew Wang"]
const descriptions = ["Saqif Our company originates from a team working directly under the University of California Riverside, personally led by Dr Sadrul Ula, Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering.", 
                "Jeffrey Our company originates from a team working directly under the University of California Riverside, personally led by Dr Sadrul Ula, Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering.", 
                "Andrew Our company originates from a team working directly under the University of California Riverside, personally led by Dr Sadrul Ula, Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering."]

const pics = [profile1,profile2,profile3];

function About() {

    const scrollToRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        if (scrollToRef.current && location.hash === '#team') {
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
            document.getElementById('currentInfo').textContent = newContent;

            document.querySelector('.event').textContent = events[3 * i];

            setCurrentEvent(i);

            setShowNewInfo(true);
        }, 300); 

    };


    const [profileIndex,setProfileIndex] = useState(0)

    const changeProfile = (i) =>{
        
        let nav = document.getElementById("carouselNav");
        let wrapper = document.getElementById("carouselWrapper");
        
        for(let x=0;x<nav.children.length;x++){
            if(i===x){
                nav.children[x].classList.add("highlight");
                wrapper.classList.add("fade");
                setTimeout(() => {
                    setProfileIndex(i);
                    wrapper.classList.remove("fade");
                    
                }, 220);
            }else{
                nav.children[x].classList.remove("highlight");
                
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

            <div className={"centerHeader"}>HOW WE WORK</div>
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
                        {events[0]}
                    </div>
                    <div id = "currentInfo" className={`new-info ${showNewInfo ? 'reveal3' : ''}`}>
                        {events[2]}
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
                                <img id={"profileImage"} src = {pics[profileIndex]} alt = "Profile of one of the founders"/>
                        </div>
                        <div className={"fifty"}>
                            <div className={"leftHeader"}>{names[profileIndex]}</div>
                            <div className={"leftText"}>
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

