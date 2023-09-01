
import './Location.css';
import React, { useState, useEffect } from 'react';

function Location({initialX,initialY, initialWidth, initialHeight, initialPos, image}) {

    const [style, setStyle] = useState({
        left: `${initialX}px`,
        top: `${initialY}px`,
        width: `${initialWidth}vmin`,
        height: `${initialHeight}vmin`,
        backgroundPosition: initialPos,
        backgroundImage: `url(${image})`,
    });

    useEffect(()=>{
        setTimeout(() => {
            console.log(initialPos);
            setStyle({
                left: '0px',
                top: '0px',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${image})`,
            });
        }, 0);
        setTimeout(() => {
            setStyle({
                left: '0px',
                top: '0px',
                width: `100vw`,
                height: `100vh`,
                backgroundImage: `url(${image})`,
                transition: `none`
            });
        }, 3000);
    }, [])




    
    return (
        <div className="Location" style = {style}>
        </div>
        
    
    );
    
    


}

export default Location;
