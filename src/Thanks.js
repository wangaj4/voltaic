import './main.css';
import './Home.css';

import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


import clientImage1 from "./img/water1.jpg";
import clientImage2 from "./img/water2.jpg";
import clientImage3 from "./img/water3.jpeg";


import Email from './Email';



let clients = ["Western Municipal", "Glendale Water and Power", "Cucamonga Valley Water"]

let clientDescriptions = ["Western Municipal Water District consists of several individual sites, each addressed separately by our analytics methods. Oleander, Bergamot, and Holcomb are some locations/sites that began saving 19 to 32% on their pump costs after our recommendations were implemented by the district. WMWD is one of our most recent partners.",
                            "Glendale Water and Power is a water utility company we've served in the past, saving them up to 40% in their individual water districts. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                            "Cucamonga Valley Water District is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]

let clientImages = [clientImage1,clientImage2,clientImage3]

function Nomatch(props) {
    
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);

    },[]);

    


    return (
        <div className={"encompass fade"}>

            <div className={"spacer"}/>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    Email successfully sent!
                </div>
            </div>

            <div className='centerText'>
                <Nav.Link as = {Link} to = "/" className = "navbarItem">
                    <div className={"button"}>
                        Go Home
                    </div>
                </Nav.Link>
            </div>

            <div className={"spacer2"}/>
            <div className={"spacer2"}/>
            

        </div>



    );








}

export default Nomatch;

