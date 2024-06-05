import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

import templogo from './img/logo.png'

function Navbar(props){

    const handleNavbarToggle = () =>{
        document.getElementById("linkContainer").classList.toggle("active");
    }

    const handleNavbarOff = () =>{
        document.getElementById("linkContainer").classList.remove("active");
    }


    /*
    <Nav.Link as = {Link} to = "/portfolio" className = "navbarItem" onClick = {()=>handleNavbarOff()}>
        Portfolio
    </Nav.Link>
    */

    return (
        <div id = "navbarBody">
            <Nav.Link as = {Link} to = "/">
                <img src = {templogo} id="logo" onClick = {()=>handleNavbarOff()}/>
            </Nav.Link>

            <div id = "linkContainer">
                <Nav.Link as = {Link} to = "/about" className = "navbarItem" onClick = {()=>handleNavbarOff()}>
                    About Us
                </Nav.Link>
                <Nav.Link as = {Link} to = "/services" className = "navbarItem" onClick = {()=>handleNavbarOff()}>
                    Our Services
                </Nav.Link>
                
                <Nav.Link as = {Link} to = "/contact" className = "navbarFocus" onClick = {()=>handleNavbarToggle()}>
                    Contact
                </Nav.Link>

            </div>

            <div id = "collapsed">
                <div className='navbarToggle' onClick = {()=>handleNavbarToggle()}>
                    <div className='hamburgerBar'/>
                    <div className='hamburgerBar'/>
                    <div className='hamburgerBar'/>
                </div>
            </div>

        </div>
    );
}

export default Navbar;

window.addEventListener("scroll",scrollFunction)
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbarBody").classList.add("shrink");
        document.getElementById("logo").classList.add("shrink");
    } else {
        document.getElementById("navbarBody").classList.remove("shrink");
        document.getElementById("logo").classList.remove("shrink");
    }
}