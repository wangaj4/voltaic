import './App.css';
import Carousel from './Carousel';
import React, { useState, useEffect } from 'react';

function App() {

    useEffect(()=>{
        console.log("test");
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
            
        </div>
        <Carousel/>
        <span id = "pointer"></span>
    </div>

  );
}

export default App;
