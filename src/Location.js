
import './Location.css';
import React, { useState, useEffect } from 'react';

function Location(props) {

    const [doneAnimating, setDoneAnimating] = useState(false);
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
            setStyle({
                left: '0px',
                top: '0px',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${props.image})`,
                transition: `none`,
                backgroundColor: `rgb(0,0,0,0.3)`
            });
            document.getElementById('titleText').textContent = "Macchu Pichu";
            setDoneAnimating(true);
        }, 1400);


    }, [])


    const goBack = () =>{
        console.log("going back");
        pointer.classList.remove('pointer-extend');
        pointer.classList.remove('pointer-go');
        setStyle({
            display:`none`
        });
        props.sendData("test");


    };




    
    return (
        <div className="Location" style = {style}>
            <div className = "locationCover"></div>
            <div id = "titleText">

            </div>
            <div className = "Back" onClick={goBack}>
                Back
            </div>
        </div>
        
    
    );
    
    


}

export default Location;
