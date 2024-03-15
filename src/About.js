import './main.css';
import './About.css';

import React, {useState, useEffect, Fragment} from 'react';

import titleImage from './img/temporarytitle.jpg'

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
                        Principal Investigator of Microgrids and Energy Infrastructure at the University's College of Engineering - Center for Environmental Research and Technology.
                    </div>
                    <div className='spacer'/>

                </div>
                <div className={"forty"}>
                    <div className={"teamImage"}/>
                </div>
            </div>
            <div className='spacer2'/>
        </div>

    );




    window.addEventListener("scroll",aboutTransitions)
    function aboutTransitions() {


    }

}

export default About;

