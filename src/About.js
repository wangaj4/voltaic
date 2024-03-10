import './main.css';
import './About.css';

import React, {useState, useEffect, Fragment} from 'react';

import titleImage from './img/temporarytitle.jpg'

function About() {


    useEffect(()=>{

        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);


    },[]);
    return (
        <div className={"encompass fade"}>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"}>
                    About Us
                </div>
            </div>

            <div className={"aboutBanner"}>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>UC Riverside Local</div>
                    <div className={"separateBar"}/>

                </div>
                <div className={"forty"}>
                    <div className={"teamImage"}/>
                </div>
            </div>
        </div>

    );




    window.addEventListener("scroll",aboutTransitions)
    function aboutTransitions() {


    }

}

export default About;

