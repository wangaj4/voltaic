import './main.css';
import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let titles = ["Western Municipal","Glendale Water and Power","Cucamonga Valley Water","Loopy","Loopy2"]


function Portfolioentry(props){

    useEffect(()=>{
    },[]);
    
    return (
        <Fragment>
            <div className={"centerText"}>
                <Nav.Link as = {Link} to = "/portfolio" className = "navbarItem">
                    Back
                </Nav.Link>
            </div>
            
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    {titles[props.index]}
                </div>
            </div>
        </Fragment>
        

    );
}

export default Portfolioentry;