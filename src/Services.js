import './main.css';
import './Services.css';

import React, {useState, useEffect, Fragment} from 'react';

function Services(){

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
            var title = document.getElementsByClassName("titleText")[0];
            title.classList.add("entry");
        },200);
    },[])
    return (
        <div className={"encompass fade"}>

            <div className={"titleBanner"}>
                <div className={"darkTint"}/>
                <div className = {"most"}>
                    <div className={"titleText"}>
                        Reduce electrical demand and save energy
                    </div>
                    <div className={"subText"}>
                        Data driven analysis to establish cost-reducing efficiency measures in water districts
                    </div>
                </div>

            </div>

            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    WHAT WE DO
                </div>
                <div className={"separateBar"}/>
                <div className={"centerText"} id = "mainDescription">
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
                <div className={"button"}>
                    Learn More
                </div>
            </div>

            <div className={"spacer"}/>
            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    SOME OF OUR WORK
                </div>
                <div className={"contain"} data-aos="fade-up">
                    <div className={"item image1"}></div>
                    <div className={"item image2"}></div>
                    <div className={"item image3"}></div>

                    <div className={"infoBox flat"} id={"infoBox"}>
                        <div id={"x"} className={"hidden"}>
                            <div className="bar"/>
                            <div className="bar"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"spacer"}>
                <div className={"centerHeader"}>WHO WE ARE</div>
            </div>

            <div className={"flexBanner"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Experience</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText hiddenLeft"} id = "team1">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <div className={"button"}>
                            Our Story
                        </div>
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
                    <div className={"centerText hiddenRight"} id = "team2">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        <div className={"button"}>
                            Our Team
                        </div>
                        <div className={"spacer"}></div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>

        </div>



    );
}

export default Services;


