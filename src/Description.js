
import './Description.css';
import React, { useState, useEffect } from 'react';

import grandCanyon from './img/Description/grandCanyonDescription.jpg'

const Introductions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
    "dolore magna aliqua. Nec sagittis aliquam malesuada bibendum. Mi ipsum faucibus vitae aliquet nec " +
    "ullamcorper. Suspendisse interdum consectetur libero id. Phasellus vestibulum lorem sed risus ultricies " +
    "tristique. Facilisi nullam vehicula ipsum a arcu cursus. Malesuada pellentesque elit eget gravida" +
    "sociis natoque penatibus et. ",
    
    "",
    "",
    "",
    "",
    "",
    ""
];


const descriptionImg = [grandCanyon];

function Description(props) {

    
    let container = null;
    
    const [yOffset, setYOffset] = useState(0);

    let scroll = document.querySelector('.scroll');


    useEffect(()=>{
        
        setTimeout(() =>{
            container = document.getElementById('descriptionContainer');
            container.style.top = '90vh';
        },100);
        
        
    }, []);




    let parallaxImage = document.querySelector('.Location');
    const [fromTop, setFromTop] = useState(0);
    
    window.addEventListener('scroll', () => {

        if(parallaxImage === null) parallaxImage = document.querySelector('.Location');

        const rect = parallaxImage.getBoundingClientRect();
        let yOffset = rect.top;
        
        setFromTop(yOffset);

        const parallaxPos = yOffset * 0.3 + 50;
        parallaxImage.style.backgroundPositionY = `${parallaxPos}%`;
        
        if(scroll === null) scroll = document.querySelector('.scroll');
        
        scroll.style.color = yOffset === 0 ? 'white' : 'transparent';

    }, {capture: true});




    useEffect(()=>{
        console.log(fromTop);
        if(fromTop < -500) document.querySelector('.pair').classList.add('reveal');
    }, [fromTop]);
    
    return (
        <div id = "descriptionContainer">
            <div className = "scroll">Scroll Down</div>
            <div className="main">
                {Introductions[props.index]}
            </div>
            <div className = "pair">
                <div className = "left">
                    <img src ={descriptionImg[props.index]}></img>
                </div>
                <div className = "right">Testing right, probably gonna be a little history and how it was developed or something</div>
            </div>
        </div>
    
    );
    
    


}

export default Description;
