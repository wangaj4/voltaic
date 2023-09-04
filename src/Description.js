
import './Description.css';
import React, { useState, useEffect } from 'react';

function Description(props) {

    
    let container = null;

    useEffect(()=>{
        
        setTimeout(() =>{
            container = document.getElementById('descriptionContainer');
            container.style.top = '90vh';
        },100);
        
        
    }, []);

    
    return (
        <div id = "descriptionContainer">
            Test
        </div>
    
    );
    
    


}

export default Description;
