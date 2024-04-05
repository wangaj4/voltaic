import './main.css';
import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';
import { Outlet} from 'react-router-dom';

function Portfolio(){

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
                    Our Portfolio
                </div>
            </div>

            <div className={"contentBanner"}>
            <div className='spacer'/>
                <div className={"centerText"}>
                    Our team at Voltaic Analytica is dedicated to providing reliable analysis guaranteed to cut down unnecessary costs.
                    <br/><br/>
                    Below are examples of past water districts we've served and saved money for, ranging from 15% to 47% cost reductions.
                </div>
                <div className='spacer2'/>
            </div>

            
            <Outlet/>
            <div className='spacer2'/>

        </div>
    );
}

export default Portfolio;