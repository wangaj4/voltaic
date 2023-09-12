import React, { useState, useEffect } from 'react';

import './Traveling.css';



function Traveling(props){
    
    useEffect(()=>{
        document.querySelector('.fixedBanner').style.backgroundImage = `url(${props.background})`;

    }, []);
    
    
    return (
        <div className = "tips">
            <div className = "fixedBanner">
                <p id = "tipTitle">Traveler's Insights</p>
            </div>
        </div>
    );
}

export default Traveling;