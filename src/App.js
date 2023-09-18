import './App.css';
import Carousel from './Carousel';
import React, { useState, useEffect } from 'react';

function App() {

    useEffect(()=>{
        console.log("test");
        document.getElementById('coverStuff').style.color='whitesmoke';
    },[]);


    const handleEnterCarousel = ()=> {
        const cover = document.getElementById('initialCover');
        cover.style.opacity='0';
        setTimeout(()=>{
            cover.style.display='none';
        },600)
    };
    

  return (
    <div className="App" onClick={()=>handleEnterCarousel()} onTouchEnd={()=>handleEnterCarousel()}>
        <div id="initialCover">
            <div id = "coverStuff">
                <h1 id = "tutorial1">Click and drag to browse locations<br/><br/>Click on an image for more information</h1>
                <h3 id = "tutorial2">Click anywhere to continue...</h3>
            </div>

        </div>
        <Carousel/>
        <span id = "pointer"></span>
    </div>

  );
}

export default App;
