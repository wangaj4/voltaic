import './main.css';

import React, {useState, useEffect, Fragment} from 'react';

function Contact(){

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
                    Contact Us
                </div>
            </div>
        </div>
    );
}

export default Contact;