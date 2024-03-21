import './main.css';
import './Home.css';

import React, {useState, useEffect, useRef} from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import titleImage from './img/temporarytitle.jpg'
import Email from './Email';

function Home(props) {
    

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        window.addEventListener('scroll',homeTransitions);
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
            //var title = document.getElementsByClassName("titleText")[0];
            //title.classList.add("entry");
        },200);

        return () => {
            window.removeEventListener('scroll', homeTransitions);
        };

    },[]);

    const openInfoBox = (index) =>{
        console.log(index);
        document.getElementById("infoBox").classList.add("wide");
        document.getElementById("x").classList.add("appear");

    };

    const closeInfoBox = () =>{
        document.getElementById("infoBox").classList.remove("wide");
        document.getElementById("x").classList.remove("appear");
    }


    return (
        <div className={"encompass fade"}>

            <div className={"titleBanner"}>
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
                    Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br/><br/>
                    Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
                    SOME OF OUR WORK
                </div>
                <div className={"contain"}>
                    <div className={"item hidden image1"} onClick={()=>openInfoBox(0)}></div>
                    <div className={"item hidden image2"} onClick={()=>openInfoBox(1)}></div>
                    <div className={"item hidden image3"} onClick={()=>openInfoBox(2)}></div>

                    <div className={"infoBox flat"} id={"infoBox"}>
                        <div id={"x"} className={"hidden"} onClick={()=>closeInfoBox()}>
                            <div className="bar"/>
                            <div className="bar"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"centerHeader"}>WHO WE ARE</div>


            <div className={"flexBanner"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Experience</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"} id = "team1" data-aos = "fade-left" data-aos-duration="600">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <Nav.Link as = {Link} to = "/about" className = "navbarItem">
                            <div className={"button"}>
                                Our Story
                            </div>
                        </Nav.Link>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div className={"teamImage"}/>
                </div>
            </div>

            <div className={"flexBanner"}>
                <div className={"forty"}>
                    <div className={"teamImage"}/>
                </div>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Talent</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"} id = "team2" data-aos = "fade-right" data-aos-duration="600">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <Nav.Link as = {Link} to = "/about#team" className = "navbarItem">
                            <div className={"button"}>
                                Our Team
                            </div>
                        </Nav.Link>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <Email/>
            <div className={"spacer2"}/>

        </div>



    );








}

export default Home;



function homeTransitions() {

    if (document.documentElement.scrollTop > 900){
        var items = document.getElementsByClassName("item");
        for(let i = 0;i < items.length;i++){
            setTimeout(()=>{
                items[i].classList.add("appear");
            },i*200);

        }
    }


}