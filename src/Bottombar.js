import React, { useState, useEffect } from 'react';
import './Bottombar.css';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import templogo from './img/templogo.png';

function Bottombar(props){
    return (
        <div id = "bottomBar">
            <div className={"bottomContent"}>
                <div className={"bottomCol"}>
                    <img src = {templogo} id="bigLogo"/>
                </div>
                <div className={"bottomCol"}>
                    business@voltaicanalytica.com
                    <br/><br/>
                    (000)000-0000
                    <br/><br/>
                    1234 Riverside Ave, Riverside, CA
                    <div className='spacer'/>
                </div>
                
                <div className={"bottomCol"}>
                    <Nav.Link as = {Link} to = "/" className = "bottomLink">
                        Home
                    </Nav.Link>
                    <br/><br/>
                    <Nav.Link as = {Link} to = "/about" className = "bottomLink">
                        About Us
                    </Nav.Link>
                    <br/><br/>
                    <Nav.Link as = {Link} to = "/services" className = "bottomLink">
                        Our Services
                    </Nav.Link>
                    <br/><br/>
                    <Nav.Link as = {Link} to = "/contact" className = "bottomLink">
                        Contact
                    </Nav.Link>
                    <div className='spacer'/>
                </div>
            </div>
        </div>
    );
}

export default Bottombar;