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
                    <div className={"button"}>
                        Learn More
                    </div>
                </div>
                
            </div>

            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    WHAT WE DO
                </div>
                <div className={"centerText hidden"} id = "mainDescription">
                    Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className={"button"}>
                    Services
                </div>
            </div>

            <div className={"spacer"}/>
            <div className={"contentBanner"}>
                <div className={"contain"}>
                    <div className={"item hidden"}>xd</div>
                    <div className={"item hidden"}>xd</div>
                    <div className={"item hidden"}>xd</div>
                </div>
            </div>
        </div>



    );
}

export default Home;


window.addEventListener("scroll",homeTransitions)
function homeTransitions() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100){
        document.getElementById("mainDescription").classList.add("appear");
    }

    if (document.documentElement.scrollTop > 700){
        var items = document.getElementsByClassName("item");
        for(let i = 0;i < items.length;i++){
            console.log("xd");
            setTimeout(()=>{
                items[i].classList.add("appear");
            },i*200);

        }
    }
}

