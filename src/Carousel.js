import './Carousel.css';
import Location from './Location';

import amazonRainforest from './img/amazonRainforest.jpg'
import grandCanyon from './img/grandCanyon.jpg'
import haLongBay from './img/haLongBay.jpg'
import machuPicchu from './img/macchuPichu.jpg'
import northernLights from './img/northernLights.jpg'
import santorini from './img/santorini.jpg'
import victoriaFalls from './img/victoriaFalls.jpg'

import amazonRainforestMin from './img/min/amazonRainforest-min.jpg'
import grandCanyonMin from './img/min/grandCanyon-min.jpg'
import haLongBayMin from './img/haLongBay.jpg'
import machuPicchuMin from './img/min/macchuPichu-min.jpg'
import northernLightsMin from './img/min/northernLights-min.jpg'
import santoriniMin from './img/min/santorini-min.jpg'
import victoriaFallsMin from './img/min/victoriaFalls-min.jpg'



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const images = [grandCanyon,haLongBay,northernLights,santorini,machuPicchu,amazonRainforest, victoriaFalls]
const imageLinks = ['./img/amazonRainforest.jpg', './img/grandCanyon.jpg', './img/haLongBay.jpg', './img/macchuPichu.jpg', './img/northernLights.jpg', './img/santorini.jpg', './img/victoriaFalls.jpg']

const imagesMin = [grandCanyonMin,haLongBayMin,northernLightsMin,santoriniMin,machuPicchuMin,amazonRainforestMin, victoriaFallsMin]

const displayNames = ["Grand Canyon", "Ha Long Bay", "Aurora Borealis", "Santorini", "Machu Picchu", "Amazon Rainforest", "Victoria Falls"]
const countries = ["America", "Vietnam", "Norway", "Greece", "Peru", "Brazil", "Zimbabwe"]
const averageColors = ["#89807e", "#988b81", "#3b5778", "#788283","#766c67", "#55635c", "#98765a"]



function Carousel() {



    const mainTrack = document.getElementById('mainTrack');
    

    const [frozen, setFrozen] = useState(false);
    const [hasMoved, setHasMoved] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);//for mouse pos
    const [offsetX, setOffsetX] = useState(0);//for carousel pos

    const [percentOffsetX, setPercentOffsetX] = useState(0);
    const [centeredImageIndex, setCenteredImageIndex] = useState(0);
    
    

    const handleMouseDown = (e) => {
        if(frozen) return;
        setIsDragging(true);
        setHasMoved(false);
        setStartX(e.clientX);
    };


    
    const handleMouseMove = (e) => {
        
        if (!isDragging || frozen) return;
        
        setHasMoved(true);
        let newOffsetX = e.clientX - startX;
        const maxDelta = window.innerWidth/2;
        let percent = (newOffsetX/maxDelta) * 100;
        let maxScroll = 100;
        percent += percentOffsetX;
        percent = percent > -0.3 ? -0.3 : percent;
        percent = percent < -maxScroll ? -maxScroll : percent;
        setOffsetX(percent);
        
        animateImage(1200);//adjust for smoothness


        let increment = 100/images.length;
        const centeredIndex = Math.min(Math.floor((-percent)/increment),images.length-1);
        setCenteredImageIndex(centeredIndex);


    };

    const handleMouseUp = () => {
        if(!isDragging || frozen) return;
        setIsDragging(false);
        setPercentOffsetX(offsetX);
    };

    const changeBackground = () => {

        const background = document.querySelector('.backgroundBlurred');
        const title = document.querySelector('.title');

        background.style.backgroundImage = `url(${imagesMin[centeredImageIndex]})`;
        background.style.opacity = 0.5;
        title.style.opacity = 1;
        title.style.left = "14vw";
        title.textContent = displayNames[centeredImageIndex];

    };


    useEffect(() => {
        const background = document.querySelector('.backgroundBlurred');
        const title = document.querySelector('.title');
        
        background.style.opacity = 0;
        title.style.opacity = 0;
        title.style.left = "12vw";
        const timer = setTimeout(() => {
            changeBackground();
        }, 500); 

        return () => {
            clearTimeout(timer);
        };
    }, [centeredImageIndex]);
    
    
    

    const animateImage = (len) => {
        console.log(offsetX);

        mainTrack.animate(
            { transform: `translateX(${offsetX}%)` },
            { duration: len, fill: 'forwards' }
        );
        
        //mainTrack.style.transform = `translateX(${offsetX}%)`;

        const carouselImages = document.querySelectorAll('.carouselImage');
        let i = 0;
        carouselImages.forEach(element =>{
            let pad = 0;
            if(i>=3) pad = 14*i;
            element.animate(

                { objectPosition: `${100 + pad + offsetX*1.7}% 50%` },
                { duration: len, fill: 'forwards' }
            );
            i++;
        });
        
    };


    const [showLocation, setShowLocation] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    const [imageX, setImageX] = useState(0);
    const [imageY, setImageY] = useState(0);
    const [imagePos, setImagePos] = useState('');
    const handleImageEntry = (index) => {


        if(frozen || hasMoved) return;
        setIsDragging(false);
        
        const whichChild = mainTrack.children[index];
        const computedStyle = window.getComputedStyle(whichChild);
        setImagePos(computedStyle.getPropertyValue('object-position'));

        const rect = whichChild.getBoundingClientRect();

        setImageX(rect.left + window.scrollX);
        setImageY(rect.top + window.scrollY);

        setFrozen(true);
        setClickedIndex(index);
        setShowLocation(true);

        const title = document.querySelector('.title');
        const background = document.querySelector('.backgroundBlurred');
        background.style.opacity = 0;
        title.style.opacity = 0;
        title.style.left = "12vw";

        setTimeout(()=>{
            mainTrack.style.display = "none";
        },1200);
        

    };


    const receiveDataFromChild = (data) => {
        mainTrack.style.display = "flex";

        setTimeout(()=>{
            setShowLocation(false);
        },500);
        
        const carouselImages = document.querySelectorAll('.carouselImage');
        let i = 0;
        carouselImages.forEach(element =>{
            element.style.transitionProperty = "none";
            element.style.marginTop = "30%";
            setTimeout(() => {
                element.style.transitionProperty = "all";
                element.style.marginTop = "0";
                
            }, 300 + 50*i);
            i+=1;
        });


        
        setTimeout(() => {
            changeBackground();
        }, 500);

        setTimeout(() => {
            setFrozen(false);
        }, 1000);
        
        
    };
    
    return (
        <div className = {`whole ${isDragging ? 'dragging' : ''}`} onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseDown={handleMouseDown} >
            <div className="backgroundBlurred"/>
            <div id = "mainTrack">
                <img className="carouselImage" src = {grandCanyonMin} alt = "" draggable= "false" onMouseUp={() => handleImageEntry(0)}/>
                <img className="carouselImage" src ={haLongBayMin} alt = "" draggable= "false" onMouseUp={() => handleImageEntry(1)}/>
                <img className="carouselImage" src ={northernLightsMin} alt = "" draggable= "false"onMouseUp={() => handleImageEntry(2)}/>
                <img className="carouselImage" src ={santoriniMin} alt = "" draggable= "false"onMouseUp={() => handleImageEntry(3)}/>
                <img className="carouselImage" src ={machuPicchuMin} alt = "" draggable= "false"onMouseUp={() => handleImageEntry(4)}/>
                <img className="carouselImage" src ={amazonRainforestMin} alt = "" draggable= "false"onMouseUp={() => handleImageEntry(5)}/>
                <img className="carouselImage" src ={victoriaFallsMin} alt = "" draggable= "false"onMouseUp={() => handleImageEntry(6)}/>
            </div>
            
            <div className="title"></div>
            {showLocation && (
                <Location index = {clickedIndex} country = {countries[clickedIndex]} name = {displayNames[clickedIndex]} sendData = {receiveDataFromChild} initialX={imageX} initialY={imageY} initialWidth = {40} initialHeight = {56} initialPos = {imagePos} image={images[clickedIndex]} />
            )}
            
            
        </div>
        
    
    );

    


}

export default Carousel;
