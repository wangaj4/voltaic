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
        },200);
    },[])
    return (
        <div className={"encompass fade"}>

            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    Our Services
                </div>
            </div>

            <div className={"contentBanner"}>
                <div className={"centerHeader"}>
                    THE BIG PICTURE
                </div>
                <div className={"separateBar"}/>
                <div className={"centerText larger"}>
                    Voltaic Analytica is a data analytics company that specializes in a specific niche. Many water districts often
                    are garbage and got extremely inefficient pumping systems.
                    <br/><br/>
                    With your water data we'll find that shit and correct it easy
                </div>
                <div className='spacer2'/>
            </div>

            <div className='spacer2'/>
            <div className={"centerHeader"}>MORE ABOUT THE PROCESS</div>
            <div className={"separateBar"}/>

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
            
        </div>



    );
}

export default Services;


