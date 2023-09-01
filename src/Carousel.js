import './Carousel.css';
import amazonRainforest from './img/amazonRainforest.jpg'
import grandCanyon from './img/grandCanyon.jpg'
import haLongBay from './img/haLongBay.jpg'
import macchuPichu from './img/macchuPichu.jpg'
import northernLights from './img/northernLights.jpg'
import santorini from './img/santorini.jpg'
import victoriaFalls from './img/victoriaFalls.jpg'

import React, { useState, useEffect } from 'react';

const images = [grandCanyon,haLongBay,northernLights,santorini,macchuPichu,amazonRainforest, victoriaFalls]
const displayNames = ["Grand Canyon", "Ha Long Bay", "Aurora Borealis", "Santorini", "Macchu Pichu", "Amazon Rainforest", "Victoria Falls"]
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
        percent = percent > 0 ? 0 : percent;
        percent = percent < -maxScroll ? -maxScroll : percent;
        setOffsetX(percent);
        
        animateImage();


        let increment = 100/images.length;
        const centeredIndex = Math.min(Math.floor((-percent)/increment),images.length-1);
        setCenteredImageIndex(centeredIndex);

        console.log(centeredIndex, percent)

    };

    const handleMouseUp = () => {
        if(!isDragging || frozen) return;
        setIsDragging(false);
        setPercentOffsetX(offsetX);
        animateImage();
    };

    const changeBackground = () => {

        const background = document.querySelector('.backgroundBlurred');
        const title = document.querySelector('.title');

        background.style.backgroundImage = `url(${images[centeredImageIndex]})`;
        background.style.opacity = 0.5;
        title.style.opacity = 1;
        title.style.left = "14vw";
        title.style.color = centeredImageIndex===2 ? "white" : "white";
        title.textContent = displayNames[centeredImageIndex];
        


    };

    useEffect(() => {
        // This effect will be triggered whenever 'centeredImageIndex' changes
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
    

    const animateImage = () => {
        
        mainTrack.animate(
            { transform: `translateX(${offsetX}%)` },
            { duration: 1500, fill: 'forwards' }
        );

        const images = document.querySelectorAll('.carouselImage');
        images.forEach(element =>{
            element.animate(
                { objectPosition: `${95+offsetX*1.1}% 50%` },
                { duration: 1500, fill: 'forwards' }
            );
        });
        
    };

    const handleImageEntry = (index) => {
        //
        // if(frozen) return;
        // if (!hasMoved){
        //     console.log("image clicked");
        //     console.log("click!", index)
        //     setFrozen(true);
        //     // mainTrack.children[index].style.left = 0;
        //     // mainTrack.children[index].style.top = 0;
        //     // mainTrack.children[index].style.width = "100vw";
        //     // mainTrack.children[index].style.height = "100vh";
        //     const trackLeft = 73 - index*20;
        //     mainTrack.transformX = 0;
        //     mainTrack.style.left = trackLeft+"vw";
        //
        //     const images = document.querySelectorAll('.carouselImage');
        //     images.forEach(element =>{
        //        
        //     });
        //
        // }

    };
    
    return (
        <div className = {`whole ${isDragging ? 'dragging' : ''}`} onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseDown={handleMouseDown} >
            <div className="backgroundBlurred"/>
            <div id = "mainTrack">
                <img className="carouselImage" src = {grandCanyon} alt = "" draggable= "false" onMouseUp={(e) => handleImageEntry(0)}/>
                <img className="carouselImage" src ={haLongBay} alt = "" draggable= "false" onMouseUp={(e) => handleImageEntry(1)}/>
                <img className="carouselImage" src ={northernLights} alt = "" draggable= "false"onMouseUp={(e) => handleImageEntry(2)}/>
                <img className="carouselImage" src ={santorini} alt = "" draggable= "false"onMouseUp={(e) => handleImageEntry(3)}/>
                <img className="carouselImage" src ={macchuPichu} alt = "" draggable= "false"onMouseUp={(e) => handleImageEntry(4)}/>
                <img className="carouselImage" src ={amazonRainforest} alt = "" draggable= "false"onMouseUp={(e) => handleImageEntry(5)}/>
                <img className="carouselImage" src ={victoriaFalls} alt = "" draggable= "false"onMouseUp={(e) => handleImageEntry(6)}/>
            </div>
            
            <div className="title"></div>
            
            
        </div>
        
    
    );
    
    


}

export default Carousel;
