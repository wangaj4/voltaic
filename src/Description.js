
import './Description.css';
import React, { useState, useEffect } from 'react';

import amazonRainforest from './img/Description/amazonRainforestDescription.jpg'
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

    "Hidden high in the Andes, Machu Picchu beckons with its ancient mystery, rich Incan history, " +
    "and awe-inspiring panoramic mountain vistas.",

    "Deep within the Amazon Rainforest's lush heart, a symphony of life unfolds, where dense jungle, mighty rivers, " +
    "and vibrant wildlife create a sanctuary of spectacular biodiversity.",

    "Nature's majesty in all its glory, Victoria Falls - the world's largest waterfall - astounds with its " +
    "immense water curtain and lush, misty rainforest surroundings."

];

const history = [
    "The Grand Canyon's history is a story of natural wonder and geological time. Over millions of years, " +
    "the Colorado River has skillfully carved this majestic chasm into the Earth's crust, exposing a stunning " +
    "tapestry of layers that reveal the planet's ancient past and deep history.",

    "Ha Long Bay's history is a testament to the enduring dance of nature and time. Over eons, the sea has " +
    "sculpted this ethereal seascape, crafting a mesmerizing ensemble of limestone islets. These mystical " +
    "formations, adorned with lush foliage, hold ancient secrets of Earth's geological legacy.",

    "The history of the Aurora Borealis is a cosmic tale that unfolds in Norway's Arctic skies. Across the ages, " +
    "these celestial lights have adorned the night canvas with their vivid hues, a result of interactions " +
    "between solar winds and Earth's magnetic field. This celestial dance has fascinated and inspired generations.",

    "Santorini's history is one of volcanic drama and mythic allure. Millennia ago, a cataclysmic eruption shaped " +
    "the island's crescent form, resulting in its stunning cliffs and vibrant sunsets. Steeped in ancient legends, " +
    "this enchanting jewel of the Aegean holds tales of lost civilizations and enduring beauty.",

    "Machu Picchu's history is an enigmatic journey into the heart of the Incan empire. Perched high in the Andes," +
    " this ancient citadel was built in the 15th century and remained hidden from the world for centuries. " +
    "Its purpose, shrouded in mystery, offers a glimpse into the architectural and cultural brilliance of its creators.",

    "The Amazon Rainforest's history is a testament to the resilience of life on Earth. Over millions of years, " +
    "it has evolved into the planet's most biodiverse ecosystem. With each passing era, this lush expanse has " +
    "witnessed the rise and fall of species, becoming a sanctuary for countless forms of life.",

    "Victoria Falls carries the legacy of untamed waters and natural grandeur. For millennia, the Zambezi River " +
    "has carved this colossal curtain of water into the Earth's crust. The result is a spectacle that inspires " +
    "wonder and reverence, nestled within a rainforest that teems with life."


]

const descriptionImg = [grandCanyon, haLongBay, northernLights, santorini, machuPicchu, amazonRainforest, victoriaFalls];


const events = [
    ["Creation", "~6 Million Years Ago", "Here is the description of how the grand canyon came to be",
    "Exploration","1869","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    "National Park","1919","Became a national park pog"],

    [],

    [],

    [],

    [],

    [],

    [],
]



function Description(props) {

    
    let container = null;
    
    const [yOffset, setYOffset] = useState(0);

    const [showNewInfo, setShowNewInfo] = useState(true);


    let scroll = document.querySelector('.scroll');


    useEffect(()=>{
        const img = new Image();
        img.src = descriptionImg[props.index];
        
        console.log("initial");
        
        setTimeout(() =>{
            container = document.getElementById('descriptionContainer');
            container.style.top = '90vh';
            
            const background = document.querySelector('.Location');
            background.style.backgroundAttachment = 'fixed';
        },100);
        
        
    }, []);



    const [currentEvent, setCurrentEvent] = useState(0);

    const changeTimeline = (i) =>{
        console.log("changing");
        if(i===currentEvent) return;
        const newContent = events[props.index][3 * i + 2];
        setShowNewInfo(false);

        setTimeout(() => {
            document.getElementById('currentInfo').textContent = newContent;

            document.querySelector('.event').textContent = events[props.index][3 * i];

            setCurrentEvent(i);

            setShowNewInfo(true);
        }, 300); 

    };



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
        if(fromTop < -600) {
            document.getElementById('history').classList.add('reveal');
        }
        if(fromTop < -1400) {
            document.getElementById('timeline').classList.add('reveal2');
            setTimeout(() => {
                document.getElementById('cultureInfo').classList.add('reveal2');
                const timelineContents = document.querySelectorAll('.timeline-content');
                let index = 0;
                timelineContents.forEach(element =>{
                    setTimeout(() =>{
                        element.classList.add('reveal');
                    }, 100 * index);
                    index++;
                    
                });
            }, 500);
            setRevealed(true);
            
        }
    }, [fromTop]);


    return (
        <div id = "descriptionContainer">
            <div className = "scroll">Scroll Down</div>
            <div className="main">
                {Introductions[props.index]}
            </div>
            
            <div className = "pair" id = "history">
                <div className = "left">
                    <img src ={descriptionImg[props.index]} priority={'true'}></img>
                </div>
                <div className = "right">{history[props.index]}</div>
            </div>
            
            <div className = "culture">
                <div className = "timelineContainer" id = "timeline">
                    <div className="timeline">
                        <div className="bar"></div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(0)}>
                                <h3>{events[props.index][0]}</h3>
                                <p>{events[props.index][1]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(1)}>
                                <h3>{events[props.index][3]}</h3>
                                <p>{events[props.index][4]}</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-circle"></div>
                            <div className="timeline-content" onClick={()=>changeTimeline(2)}>
                                <h3>{events[props.index][6]}</h3>
                                <p>{events[props.index][7]}</p>
                            </div>
                        </div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className = "cultureInfo" id = "cultureInfo">
                    <div className="event">
                        {events[props.index][0]}
                    </div>
                    <div id = "currentInfo" className={`new-info ${showNewInfo ? 'reveal3' : ''}`}>
                        {events[props.index][2]}
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
