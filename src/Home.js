import './main.css';
import './Home.css';

import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


import clientImage1 from "./img/western2.jpg";
import clientImage2 from "./img/water2.jpg";
import clientImage3 from "./img/water3.jpeg";


import Email from './Email';



let steps = ["1 - District Contact", "2 - Data Analysis", "3 - Results"]

let clientDescriptions = ["Western Municipal Water District consists of several individual sites, each addressed separately by our analytics methods. Holcomb is one such site, where there are multiple electric and gas pumps. We discussed new innovative energy saving methods to reduce peak electrical demand while still satisfying water needs.",
                            "In this situation, based on the district's pump information, we gathered its 15-minute interval Supervision Control And Data Acquisition (SCADA)data, as well as the district's detailed electric billing, among other needed information we requested. From this information, we altered pump scheduling to more efficiently supply pump needs with lower cost electricity.",
                            "Holcomb began saving an average of 46% on their pumps' energy costs over 12 months after our recommendations were implemented by the district, compared to the previous year. Electric costs were significantly reduced compared to pre-implementation activity."]

let clientImages = [clientImage1,clientImage2,clientImage3]

function Home(props) {
    
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);
    const [infoBoxIndex, setIndex] = useState(0);

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        window.addEventListener('scroll',homeTransitions);
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);

        return () => {
            window.removeEventListener('scroll', homeTransitions);
        };

    },[]);

    

    function homeTransitions() {
        setBackgroundPositionY(-document.documentElement.scrollTop/4);
        if (document.documentElement.scrollTop > 900){
            var items = document.getElementsByClassName("item");
            for(let i = 0;i < items.length;i++){
                setTimeout(()=>{
                    items[i].classList.add("appear");
                },i*200);

            }
        }


    }

    const openInfoBox = (index) =>{
        console.log(index);
        document.getElementById("infoBox").classList.add("wide");
        document.getElementById("x").classList.add("appear");

        setIndex(index);
        setTimeout(() => {
            try{
                document.getElementById("infoBoxContent").classList.add("flex");
            }catch(x){

            }
            
        }, 300);
        setTimeout(() => {
            try{
                document.getElementById("infoBoxContent").classList.add("opaque");
            }catch(x){

            }

        }, 500);

    };

    const closeInfoBox = () =>{
        document.getElementById("infoBox").classList.remove("wide");
        document.getElementById("x").classList.remove("appear");
        document.getElementById("infoBoxContent").classList.remove("opaque");
        document.getElementById("infoBoxContent").classList.remove("flex");
    }

    {/*

<div className={"spacer"}/>
            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    SOME OF OUR WORK
                </div>
                <div className={"centerSubheader"}>Click on the images to view more information</div>
                <div className={"contain"}>
                    <div className={"item hidden image1"} onClick={()=>openInfoBox(0)}>
                        <div className='coverText'>
                        {clients[0]}
                        </div>
                    </div>
                    <div className={"item hidden image2"} onClick={()=>openInfoBox(1)}>
                        <div className='coverText'>
                        {clients[1]}
                        </div>
                    </div>
                    <div className={"item hidden image3"} onClick={()=>openInfoBox(2)}>
                        <div className='coverText'>
                        {clients[2]}
                        </div>
                    </div>

                    <div className={"infoBox flat"} id={"infoBox"}>
                        <div id={"x"} className={"hidden"} onClick={()=>closeInfoBox()}>
                            <div className="bar"/>
                            <div className="bar"/>
                        </div>
                        <div id = 'infoBoxContent'>
                            <div className={"forty"}>
                                <img className={"infoImage"} src = {clientImages[infoBoxIndex]} alt = "Example portfolio from previous client"/>
                            </div>
                            <div className={"sixty"}>
                                <div className={"centerHeader"}>{clients[infoBoxIndex]}</div>
                                <div className={"separateBarWhite"}/>
                                <div className={"leftText"}>
                                    {clientDescriptions[infoBoxIndex]}
                                    <br/>
                                </div>
                                <Nav.Link as = {Link} to = "/portfolio/western" className = "navbarItem">
                                        <div className={"button"}>
                                            Learn More
                                        </div>
                                </Nav.Link>
                            </div>
                        
                        </div>
                    </div>
                </div>
*/}


    return (
        <div className={"encompass fade"}>

            <div className={"titleBanner"} id = "titleBanner" style={{ backgroundPositionY: `${backgroundPositionY}px` }}>
                <div className={"darkTint"}/>
                <div className = {"most"}>
                    <div className={"titleText"} data-aos = "fade-right" data-aos-duration="500">
                        Reduce electrical demand and save energy
                    </div>
                    <div className={"subText"} data-aos = "fade-right" data-aos-duration="1000">
                       Data driven analysis to establish cost-reducing efficiency measures in water districts
                    </div>
                </div>
                
            </div>

            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    WHAT WE DO
                </div>
                <div className={"separateBar"}/>
                <div className={"centerText"} id = "mainDescription" data-aos="fade-up" data-aos-duration="800">
                    Voltaic Analytica is a data analytics company dedicated to partnering with and serving the water districts of America. 
                    After collecting the necessary information such as monthly bills and interval data of water district pumps, we utilize data-driven analysis to 
                    calculate potential savings and recommendations for the water departments we work with.
                    <br/><br/>
                    We will remain in contact for the entirety of the process timeline, clarifying and updating as we develop actionable insights
                    for your district's savings. Multiple presentations will periodically be given to ensure peak efficiency and cost reductions.
                </div>
                <Nav.Link as = {Link} to = "/services" className = "navbarItem">
                    <div className={"button"}>
                        Learn More
                    </div>
                </Nav.Link>
                
            </div>

            <div className={"spacer"}/>
            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    AN EXAMPLE
                </div>
                <div className={"centerSubheader"}>Click on the images for a step by step breakdown of past work</div>
                <div className={"contain"}>
                    <div className={"item hidden image1"} onClick={()=>openInfoBox(0)}>
                        <div className='coverText'>
                        {steps[0]}
                        </div>
                    </div>
                    <div className={"item hidden image2"} onClick={()=>openInfoBox(1)}>
                        <div className='coverText'>
                        {steps[1]}
                        </div>
                    </div>
                    <div className={"item hidden image3"} onClick={()=>openInfoBox(2)}>
                        <div className='coverText'>
                        {steps[2]}
                        </div>
                    </div>

                    <div className={"infoBox flat"} id={"infoBox"}>
                        <div id={"x"} className={"hidden"} onClick={()=>closeInfoBox()}>
                            <div className="bar"/>
                            <div className="bar"/>
                        </div>
                        <div id = 'infoBoxContent'>
                            <div className={"forty"}>
                                <img className={"infoImage"} src = {clientImages[infoBoxIndex]} alt = "Example portfolio from previous client"/>
                            </div>
                            <div className={"sixty"}>
                                <div className={"centerHeader"}>{steps[infoBoxIndex]}</div>
                                <div className={"separateBarWhite"}/>
                                <div className={"leftText"}>
                                    {clientDescriptions[infoBoxIndex]}
                                    <br/>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"centerHeader"}>WHO WE ARE</div>


            <div className={"flexBanner reverse"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Experience</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team1" data-aos = "fade-left" data-aos-duration="600">
                        Under our previous experience from years operating as a UC Riverside research group, we have honed our analytics methods 
                        to ensure substantial savings in individual water districts. Our team has previously worked with and served numerous water 
                        districts in the Southern California area. 
                        <br/>
                        
                    </div>
                    <div className={"centerText"}>
                        <Nav.Link as = {Link} to = "/about" className = "navbarItem">
                            <div className={"button"}>
                                Our Story
                            </div>
                        </Nav.Link>
                    </div>
                    
                </div>
                <div className={"forty"}>
                    <div className={"teamImage"}/>
                </div>
            </div>

            <div className={"flexBanner"}>
                <div className={"forty"}>
                    <div className={"teamImage2"}/>
                </div>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Talent</div>
                    <div className={"separateBar"}/>
                    <div className={"leftText"} id = "team2" data-aos = "fade-right" data-aos-duration="600">
                        Aside from our UC Riverside research and work experience, our team includes a diverse array of computer science, economics, and
                        statistics specialists from across the country. Our data analytics and programming skills are not limited
                        to our Riverside data analytics methods, ensuring we stay flexible and open to new approaches.
                        <br/>
                        

                    </div>
                    <div className='centerText'>
                        <Nav.Link as = {Link} to = "/about#team" className = "navbarItem">
                            <div className={"button"}>
                                Our Team
                            </div>
                        </Nav.Link>
                    </div>
                    
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"centerHeader"}>LET'S TALK</div>
            <div className={"centerSubheader"}>Questions? Business inquiries? Use the form to get in touch.</div>
            <div className='spacer'/>
            <Email/>
            <div className={"spacer2"}/>

        </div>



    );








}

export default Home;

