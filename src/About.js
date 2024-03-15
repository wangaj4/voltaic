import './main.css';
import './About.css';

import React, {useState, useEffect, Fragment} from 'react';

import titleImage from './img/temporarytitle.jpg'

const events = ["Data Collection", "Your water data", "Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Analysis","Detecting inefficiencies","Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Presentation","Fixing the problem","Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]



function About() {


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
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

    return (
        <div className={"encompass fade"}>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"}>
                    About Us
                </div>
            </div>

            <div className={"aboutBanner"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>UC Riverside</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"}>
                        Our company originates from a team working directly under the University of California Riverside, personally trained by Dr Sadrul Ula, 
                        Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering.
                        <br/><br/>
                        Under the University's programs, we have already served various water districts across Southern California, allowing them to operate under more efficient conditions and scheduling.

                    </div>
                    <div className='spacer'/>
                </div>
                <div className={"forty"}>
                    <div className={"aboutImage"}/>
                </div>
            </div>

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

            <div className={"centerHeader"}>OUR LEADERSHIP</div>
            <div className={"separateBar"}/>

            <div className='spacer2'/>
        </div>

    );




    function aboutTransitions() {
        if (document.documentElement.scrollTop > 500){
            document.getElementById('timeline').classList.add('reveal2');
            setTimeout(() => {
                document.getElementById('cultureInfo').classList.add('reveal2');
                const timelineContents = document.querySelectorAll('.timeline-content');
                let index = 0;
                timelineContents.forEach(element =>{
                    setTimeout(() =>{
                        element.classList.add('reveal');
                    }, 200 * index);
                    index++;
                    
                });
            }, 500);
        }

    }

}

export default About;

