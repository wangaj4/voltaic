import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

import templogo from './img/templogo.png'

function Navbar(props){


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
                    Services
                </Nav.Link>
                <Nav.Link as = {Link} to = "/about" className = "navbarItem">
                    Portfolio
                </Nav.Link>
                <Nav.Link as = {Link} to = "/about" className = "navbarItem">
                    Media
                </Nav.Link>
                <Nav.Link as = {Link} to = "/about" className = "navbarFocus">
                    Contact
                </Nav.Link>

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