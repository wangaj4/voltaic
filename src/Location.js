
import './Location.css';
import Description from './Description';
import React, { useState, useEffect } from 'react';



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
        
        setTimeout(() => {
            setStyle({
                left: '0px',
                top: '0px',
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
                left: '0px',
                top: '0px',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${props.image})`,
                transition: `none`
            });
            setDoneAnimating(true);
            pointer.classList.add('pointer-go');
            const locationCover = document.querySelector('.locationCover');
            locationCover.classList.add('tint');
        }, 1200);
        setTimeout(() => {
            const title = document.getElementById('titleText');
            title.children[0].textContent = props.name;
            title.children[1].textContent = props.country;
            const back = document.querySelector('.Back');
            back.style.opacity = 1;
            setDoneAnimating(true);
            setShowDescription(true);
        }, 1450);
        

    }, [])


    const goBack = () =>{
        console.log("going back");
        pointer.classList.remove('pointer-extend');
        pointer.classList.remove('pointer-go');
        setStyle({
            transitionDuration: '2s',
            left: '0px',
            top: '-200vh',
            width: `100vw`,
            height: `100vh`,
            backgroundImage: `url(${props.image})`,
        });
        const self = document.querySelector('.Location');
        const description = document.getElementById('descriptionContainer');
        description.style.top = '110vh';
        props.sendData("test");


    };



    let parallaxImage = document.querySelector('.Location');
    window.addEventListener('scroll', () => {
        if(parallaxImage === null) parallaxImage = document.querySelector('.Location');

        const rect = parallaxImage.getBoundingClientRect();
        let yOffset = rect.top;
        
        const parallaxPos = yOffset * 0.3 + 50;
        parallaxImage.style.backgroundPositionY = `${parallaxPos}%`;
        
    }, {capture: true});


    return (
        <div className = "container">
            <div className="Location" style = {style}>
                <div className = "locationCover"></div>
                <div id = "titleText">
                    <p></p>
                    <p></p>
                </div>
                <div className = "Back" onClick={goBack}>
                    Back
                </div>
            </div>
            {showDescription && (
                <Description/>
            )}
        </div>
    
    );
    
    


}

export default Location;
