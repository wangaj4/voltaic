
import './Location.css';
import Description from './Description';
import React, { useState, useEffect } from 'react';

import { preloadImages, preloadedImages } from './Preload';




function Location(props) {


    const [doneAnimating, setDoneAnimating] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const pointer = document.getElementById('pointer');



    const [style, setStyle] = useState({
        left: `${props.initialX}px`,
        top: `${props.initialY}px`,
        width: `${props.initialWidth}vmin`,
        height: `${props.initialHeight}vmin`,
        backgroundPosition: props.initialPos,
        backgroundImage: `url(${props.image})`,
        display:`block`
    });

   


    useEffect(()=>{
        
        preloadImages().then(() => {
            const image = preloadedImages[props.index];
        });
        
        const title = document.getElementById('titleText');
        
        setTimeout(() => {
            setStyle({
                left: '0',
                top: '0',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${props.image})`,
            });
        }, 0);
        setTimeout(() => {
            pointer.classList.add('pointer-extend');

        }, 900);
        setTimeout(() => {
            setStyle({
                left: '0',
                top: '0',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${props.image})`,
                transition: `none`
            });
            pointer.classList.add('pointer-go');
            const locationCover = document.querySelector('.locationCover');
            locationCover.classList.add('tint');
            setDoneAnimating(true);



        }, 1200);
        setTimeout(() => {
            setShowDescription(true);
            
            title.children[0].textContent = props.name;
            title.children[1].textContent = props.country;
            title.classList.add('reveal');

            const back = document.querySelector('.Back');
            back.style.opacity = 1;
        }, 1450);
        

    }, [])


    const goBack = () =>{
        console.log("going back");
        
        const background = document.querySelector('.Location');
        background.style.backgroundAttachment = 'scroll';
        pointer.classList.remove('pointer-extend');
        pointer.classList.remove('pointer-go');
        setStyle({
            transitionDuration: '2s',
            left: '0',
            top: '-180vh',
            width: `100vw`,
            height: `100vh`,
            backgroundImage: `url(${props.image})`,
        });
        const self = document.querySelector('.Location');
        const description = document.getElementById('descriptionContainer');

        if(description != null) description.style.top = '110vh';

        props.sendData("test");


    };





    return (
        <div className = "container">
            <div className="Location" style = {style}>
                <div className = "locationCover"></div>
                <div id = "titleText">
                    <p></p>
                    <p></p>
                </div>
                {doneAnimating && (
                    <div className = "Back" onClick={goBack}>
                        Back
                    </div>
                )}
            </div>
            {showDescription && (
                <Description index = {props.index}/>
            )}
        </div>
    
    );
    
    


}

export default Location;
