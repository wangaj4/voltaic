import React, { useState, useEffect } from 'react';
import './Navbar.css';

import templogo from './img/templogo.png'

function Navbar(props){

    const navbarHandle = (index) =>{
        props.viewSwapper(index);
    };

    return (
        <div id = "navbarBody">
            <img src = {templogo} id="logo" onClick={() => navbarHandle(0)}/>
            <div id = "linkContainer">
                <span className = "navbarItem" onClick={() => navbarHandle(1)}>About Us</span>
                <span className = "navbarItem" onClick={() => navbarHandle(2)}>Our Services</span>
                <span className = "navbarItem" onClick={() => navbarHandle(3)}>Portfolio</span>
                <span className = "navbarItem" onClick={() => navbarHandle(4)}>Media</span>
                <span className = "navbarFocus" onClick={() => navbarHandle(5)}>Contact</span>
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