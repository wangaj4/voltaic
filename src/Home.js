import './main.css';
import './Home.css';

import React, {useState, useEffect, Fragment} from 'react';

import titleImage from './img/temporarytitle.jpg'

function Home() {
    

    useEffect(()=>{
        setTimeout(()=>{
            var title = document.getElementsByClassName("titleText")[0];
            title.classList.add("entry");
        },200);
        
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
        <div>

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
                <div className={"centerText hidden"} id = "mainDescription">
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
            <div className={"spacer"}>
                <div className={"centerHeader"}>Who We Are</div>
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
                        <br/><br/>
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
                        <br/><br/>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>

        </div>



    );
}

export default Home;


window.addEventListener("scroll",homeTransitions)
function homeTransitions() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 250){
        document.getElementById("mainDescription").classList.add("appear");
    }

    if (document.documentElement.scrollTop > 1100){
        var items = document.getElementsByClassName("item");
        for(let i = 0;i < items.length;i++){
            setTimeout(()=>{
                items[i].classList.add("appear");
            },i*200);

        }
    }

    if (document.documentElement.scrollTop > 1900){
        var team1 = document.getElementById("team1");
        team1.classList.add("appearLeft");
    }

    if (document.documentElement.scrollTop > 2400){
        var team2 = document.getElementById("team2");
        team2.classList.add("appearRight");
    }

}

