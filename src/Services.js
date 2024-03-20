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
            <div className={"flexBanner"} data-aos = "fade-right">
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 1 - Data Collection</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"} id = "team1">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div class = "stepImage1"/>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"flexBanner"} data-aos = "fade-left">
                <div className={"forty"}>
                    <div className={"stepImage2"}/>
                </div>
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 2 - Data Analysis</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"} id = "team1">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
            </div>

            <div className={"spacer2"}/>
            <div className={"flexBanner"} data-aos = "fade-right">
                <div className={"sixty"}>
                    <div className={"centerHeader"}>Step 3 - Presentation</div>
                    <div className={"separateBar"}/>
                    <div className={"centerText"} id = "team1">
                        Voltaic Analytica is sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br/>
                        
                        <div className={"spacer"}></div>
                    </div>
                </div>
                <div className={"forty"}>
                    <div className={"stepImage3"}/>

                </div>
            </div>

            <div className={"spacer2"}/>
            
        </div>



    );
}

export default Services;


