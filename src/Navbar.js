import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

import templogo from './img/templogo.png'

function Navbar(props){

    const handleNavbarToggle = () =>{
        
    }


    return (
        <div id = "navbarBody">
            <Nav.Link as = {Link} to = "/">
                <img src = {templogo} id="logo"/>
            </Nav.Link>

            <div id = "linkContainer">
                <Nav.Link as = {Link} to = "/about" className = "navbarItem">
                    About Us
                </Nav.Link>
                <Nav.Link as = {Link} to = "/services" className = "navbarItem">
                    Our Services
                </Nav.Link>
                <Nav.Link as = {Link} to = "/portfolio" className = "navbarItem">
                    Portfolio
                </Nav.Link>
                <Nav.Link as = {Link} to = "/contact" className = "navbarFocus">
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