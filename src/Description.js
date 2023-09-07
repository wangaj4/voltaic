
import './Description.css';
import React, { useState, useEffect } from 'react';

import amazonRainforest from './img/Description/amazonRainforest.jpg'
import grandCanyon from './img/Description/grandCanyonDescription.jpg'
import haLongBay from './img/Description/haLongBayDescription.jpg'
import machuPicchu from './img/Description/machuPicchuDescription.jpg'
import northernLights from './img/Description/auroraBorealisDescription.jpg'
import santorini from './img/Description/santoriniDescription.jpg'
import victoriaFalls from './img/Description/victoriaFallsDescription.jpg'

const Introductions = [
    "A colossal, breathtaking chasm carved by the Colorado River, the Grand Canyon is known for " +
    "its stunning beauty and vibrant, layered rock formations.",

    "Nestled in northern Vietnam, Ha Long Bay welcomes explorers to its emerald embrace, a world of mystical limestone islets, " +
    "hidden caves, and a serene seascape that captivates the soul.",

    "In Norway's Arctic night, witness the celestial spectacle of the Aurora Borealis, where the vibrant dance of colors illuminates " +
    "the dark expanse like a mesmerizing cosmic painting.",

    "A picturesque jewel in the Aegean Sea, Santorini enchants with its iconic sunsets, unique and beautiful white-washed architecture, " +
    "and stunning seascapes.",

    "Hidden high in the Andes, Machu Picchu beckons with its ancient mystery, rich Incan history, and awe-inspiring panoramic mountain vistas.",

    "Deep within the Amazon Rainforest's lush heart, a symphony of life unfolds, where dense jungle, mighty rivers, " +
    "and vibrant wildlife create a sanctuary of spectacular biodiversity.",

    "Nature's majesty in all its glory, Victoria Falls astounds with its immense water curtain and lush, misty rainforest surroundings."

];


const history = [
    "The Grand Canyon's history is a story of natural wonder and geological time. Over millions of years, " +
    "the Colorado River has skillfully carved this majestic chasm into the Earth's crust, exposing a stunning " +
    "tapestry of rock layers that reveal the planet's ancient past and deep history.",

    "",

    "",

    "",

    "",

    "",

    ""


]


const descriptionImg = [grandCanyon, haLongBay, northernLights, santorini, machuPicchu, amazonRainforest, victoriaFalls];



function Description(props) {

    
    let container = null;
    
    const [yOffset, setYOffset] = useState(0);

    let scroll = document.querySelector('.scroll');


    useEffect(()=>{
        
        setTimeout(() =>{
            container = document.getElementById('descriptionContainer');
            container.style.top = '90vh';
            
            const background = document.querySelector('.Location');
            background.style.backgroundAttachment = 'fixed';
        },100);
        
        
    }, []);




    let parallaxImage = document.querySelector('.Location');
    const [fromTop, setFromTop] = useState(0);
    
    window.addEventListener('scroll', () => {

        if(parallaxImage === null) parallaxImage = document.querySelector('.Location');

        const rect = parallaxImage.getBoundingClientRect();
        let yOffset = rect.top;
        
        setFromTop(yOffset);

        // const parallaxPos = yOffset * 0.3 + 50;
        // parallaxImage.style.backgroundPositionY = `${parallaxPos}%`;

        if(scroll === null) scroll = document.querySelector('.scroll');

        scroll.style.color = yOffset === 0 ? 'white' : 'transparent';

    }, {capture: true});




    const [revealed, setRevealed] = useState(false);
    useEffect(()=>{
        if(revealed) return;
        console.log(fromTop);
        if(fromTop < -500) {
            document.querySelector('.right').classList.add('reveal');
            setRevealed(true);
        }
    }, [fromTop]);
    
    return (
        <div id = "descriptionContainer">
            <div className = "scroll">Scroll Down</div>
            <div className="main">
                {Introductions[props.index]}
            </div>
            <div className = "pair">
                <div className = "left">
                    <img src ={descriptionImg[props.index]}></img>
                </div>
                <div className = "right">{history[props.index]}</div>
            </div>
            <div className = "culture">
                <div className = "left">
                    <div className="timeline">
                        <div className="bar"></div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content">
                                <h3>Event 1</h3>
                                <p>Description of Event 1</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content">
                                <h3>Event 2</h3>
                                <p>Description of Event 2</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content">
                                <h3>Event 3</h3>
                                <p>Description of Event 3</p>
                            </div>
                        </div>
                        <div className="bar"></div>
                    </div>
                </div>

            </div>
            <div className = "tips">

            </div>
            <div className = "gallery">

            </div>

        </div>
    
    );
    
    


}

export default Description;
