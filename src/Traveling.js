import React, { useState, useEffect } from 'react';

import './Traveling.css';

import grandCanyonTip from './img/TipBackground/grandCanyonTip.jpg'
import haLongBayTip from './img/TipBackground/haLongBayTip.jpg'
import auroraBorealisTip from './img/TipBackground/auroraBorealisTip.jpg'
import santoriniTip from './img/TipBackground/santoriniTip.jpg'
import machuPicchuTip from './img/TipBackground/machuPicchuTip.jpg'
import amazonTip from './img/TipBackground/amazonTip.jpg'
import victoriaTip from './img/TipBackground/victoriaTip.jpg'


import canyon1 from './img/Tips/canyon1.jpg'
import canyon2 from './img/Tips/canyon2.jpg'
import canyon3 from './img/Tips/canyon3.jpg'
import canyon4 from './img/Tips/canyon4.jpg'

import bay1 from './img/Tips/bay1.jpg'
import bay2 from './img/Tips/bay2.jpg'
import bay3 from './img/Tips/bay3.jpg'
import bay4 from './img/Tips/bay4.jpg'

import lights1 from './img/Tips/lights1.jpg'
import lights2 from './img/Tips/lights2.jpg'
import lights3 from './img/Tips/lights3.jpg'
import lights4 from './img/Tips/lights4.jpg'

import santorini1 from './img/Tips/santorini1.jpg'
import santorini2 from './img/Tips/santorini2.jpg'
import santorini3 from './img/Tips/santorini3.jpg'
import santorini4 from './img/Tips/santorini4.jpg'

import machu1 from './img/Tips/machu1.jpg'
import machu2 from './img/Tips/machu2.jpg'
import machu3 from './img/Tips/machu3.jpg'
import machu4 from './img/Tips/machu4.jpg'

import forest1 from './img/Tips/forest1.jpg'
import forest2 from './img/Tips/forest2.jpg'
import forest3 from './img/Tips/forest3.jpg'
import forest4 from './img/Tips/forest4.jpg'

import victoria1 from './img/Tips/victoria1.jpg'
import victoria2 from './img/Tips/victoria2.jpg'
import victoria3 from './img/Tips/victoria3.jpg'
import victoria4 from './img/Tips/victoria4.jpg'


const tipTitles = ["Best Time to Visit", "Safety", "Responsible Tourism", "Planning and Preparation"]

const tipImg = [grandCanyonTip,haLongBayTip, auroraBorealisTip, santoriniTip, machuPicchuTip, amazonTip, victoriaTip]



const tip1Img = [canyon1, bay1, lights1, santorini1, machu1, forest1, victoria1]
const tip2Img = [canyon2, bay2, lights2, santorini2, machu2, forest2, victoria2]
const tip3Img = [canyon3, bay3, lights3, santorini3, machu3, forest3, victoria3]
const tip4Img = [canyon4, bay4, lights4, santorini4, machu4, forest4, victoria4]

const tip1 = [
    "The Grand Canyon is at its most pleasant in the spring (March to May) and fall (September to November) when temperatures are mild, and crowds are less dense. Avoid the scorching summer heat and frigid winter conditions, but plan accordingly if visiting during these seasons.",

    "Ha Long Bay is most enchanting during the drier months of October to April, when the weather is cooler and skies are clearer. Avoid the rainy season from May to September. Sunrise and sunset cruises offer breathtaking views and serene experiences.",

    "Northern Norway offers prime viewing of the Northern Lights from late September to early April when the nights are longest and the skies are darkest. The period around the equinoxes in September and March often brings enhanced auroral activity. Clear, moonless nights provide the best conditions for this mesmerizing celestial display.",

    "Santorini is at its best during the late spring (April to June) and early autumn (September to October) when the weather is pleasant, and the crowds are thinner. These months offer ideal conditions for exploring the island, enjoying its stunning sunsets, and taking part in outdoor activities.",

    "To experience the awe of Machu Picchu at its best, plan your visit during the dry season, from May to October. During these months, the weather is generally mild, and you'll have clearer views of the ruins. Aim for early morning or late afternoon visits to avoid crowds and capture the ruins in beautiful light.",

    "For the ultimate Amazon experience, plan your visit during the dry season, typically from June to November. During these months, the rainforest is more accessible, with lower water levels and fewer mosquitoes. Wildlife is also easier to spot when they congregate around water sources.",

    "To witness Victoria Falls in its full glory, plan your visit during the dry season from April to October. During these months, the water levels are lower, offering unobstructed views of the falls and the opportunity to explore walking trails. However, the wet season (November to March) provides a different perspective with higher water levels and lush vegetation"
]

const tip2 = [
    "Safety is paramount at the Grand Canyon. Stay hydrated, especially during hot months, and protect against sunburn with sunscreen, hats, and sunglasses. Dress in layers as temperatures can vary, and wear sturdy, comfortable footwear. Stay on marked trails and adhere to park rules, especially regarding cliff edges.",

    "Prioritize safety when exploring Ha Long Bay. While on boats or kayaks, always wear life jackets. Protect yourself from the sun with sunscreen, hats, and sunglasses. Be cautious on slippery surfaces when disembarking from boats or visiting caves. Stay hydrated and practice responsible drinking.",

    "Stay safe while Northern Lights hunting in Norway by dressing warmly in insulated clothing and sturdy winter boots. Layering is key, as temperatures can drop significantly. Be cautious when walking on icy or snowy terrain, especially during excursions. Bring along hand warmers, and remember to stay hydrated, even in the cold.",

    "Prioritize safety when exploring Santorini's charming streets and stunning cliffs. Wear comfortable, sturdy footwear for walking on cobblestone paths. Protect yourself from the sun with sunscreen, hats, and sunglasses, especially during the sunny summer months. Stay hydrated and exercise caution near cliff edges and steep steps.",

    "Prioritize your safety while exploring Machu Picchu. Wear sturdy, comfortable footwear for navigating uneven terrain, and protect yourself from the sun's intensity with sunscreen, hats, and sunglasses. Stay hydrated with plenty of water, especially at higher altitudes. Respect safety barriers and guidelines to ensure a secure visit.",

    "Safety is paramount in the Amazon Rainforest. Wear lightweight, long-sleeved clothing to protect against insects and the sun. Stay hydrated by drinking filtered water and avoid swimming in unknown bodies of water to reduce the risk of waterborne illnesses. Don't forget to use insect repellent.",

    "Prioritize safety during your visit to Victoria Falls. Wear appropriate footwear with good grip when walking on wet paths near the falls. Protect yourself from the sun with sunscreen, hats, and sunglasses. Stay hydrated in the hot climate, and avoid getting too close to the edge of the cliffs. Respect any safety barriers."
]

const tip3 = [
    "Practice responsible tourism by adhering to Leave No Trace principles. Carry out all trash, minimize noise to respect the park's tranquility, and avoid disturbing wildlife. Respect the cultural significance of the Grand Canyon to Native American tribes by not removing artifacts or disrupting archaeological sites.",

    "Show respect for Ha Long Bay's natural beauty by adhering to responsible tourism practices. Dispose of trash properly, especially on boats, and avoid littering. Do not disturb marine life or coral reefs while snorkeling or swimming. Follow instructions from tour guides regarding protected areas.",

    "Be a responsible traveler when witnessing the Northern Lights. Minimize light pollution by turning off unnecessary lights and electronics. Respect local guidelines for protecting the environment, such as not venturing off designated paths during tours. Preserve the serenity of the Arctic wilderness for yourself and future generations.",

    "While exploring Santorini, embrace sustainable tourism by respecting local customs and traditions. Show care for the island's delicate environment by refraining from littering or disrupting wildlife. When visiting historic sites and places of worship, adhere to modest dress codes and avoid using flash photography. ",

    "Engage in responsible tourism by respecting the sanctity of Machu Picchu. Stay on designated paths and avoid touching or disturbing the ancient structures. Refrain from littering and dispose of trash in designated bins. Keep noise levels low to maintain the tranquil atmosphere and respect the significance of this historic site.",

    "Embrace responsible tourism in the Amazon by following the principles of Leave No Trace. Carry out all trash, respect the environment, and avoid disturbing wildlife. Engage with local communities respectfully, learn about their culture, and support sustainable tourism initiatives that benefit both visitors and the rainforest.",

    "Engage in responsible tourism by respecting the natural environment and local communities. Dispose of trash in designated bins, and avoid littering. Be mindful of wildlife and refrain from feeding or disturbing animals. When visiting nearby villages, respect local customs and traditions."
]

const tip4 = [
    "Create an itinerary based on your interests, and make reservations for camping, lodging, or popular activities well in advance. Check the weather forecast, pack accordingly, and carry essentials like maps, water, snacks, and a first-aid kit. Familiarize yourself with emergency contacts and park regulations to ensure a safe and enjoyable trip.",

    "Research reputable tour operators or cruises, and make reservations early, especially during peak tourist seasons. Check the weather forecast, and pack appropriate clothing, swimwear, and comfortable footwear. Don't forget essentials like travel documents, a first-aid kit, and any necessary medications. ",

    "Research and book tours or accommodations in advance, especially in popular locations like Tromsø or Kirkenes. Check the aurora forecast for predicted activity levels and cloud cover. Bring essential cold-weather gear, travel documents, and emergency contact information to stay prepared for your arctic adventure.",

    "Ensure your Santorini adventure goes off without a hitch by meticulous planning. Research accommodation options and secure reservations in advance, especially during the bustling summer season. Familiarize yourself with local transportation, such as buses and taxis. Pack lightweight, comfortable attire and swimwear.",

    "To make the most of your Machu Picchu journey, meticulous planning is essential. Reserve tickets well in advance, as there are daily visitor limits. Check the weather forecast and pack appropriately, including layers for varying temperatures, rain gear, and comfortable hiking shoes.",

    "A successful Amazon adventure requires careful planning. Choose a reputable tour operator with experienced guides. Pack appropriate clothing for the rainforest's humid and tropical climate, including lightweight, moisture-wicking attire and sturdy, waterproof footwear. ",

    "Comprehensive planning ensures a memorable Victoria Falls experience. Research accommodations and activities in advance, especially if you plan to partake in popular activities like safaris or helicopter tours. Check visa requirements and ensure you have necessary travel documents. Pack appropriate clothing for varying weather conditions."
]

function Traveling(props){
    
    useEffect(()=>{
        document.querySelector('.fixedBanner').style.backgroundImage = `url(${tipImg[props.index]})`;

    }, []);


    const [expand0, setExpand0] = useState(false);
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);

    let tipName = document.getElementById("tipName");
    
    
    const handleTipClick = (i) => {
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.add('revealBox');

        const x = document.getElementById("tipX");
        const tipPair = document.getElementById("tipPair");
        const tipContent = document.getElementById("tipContent");
        const tipImg = document.getElementById("tipImg");

        tipPair.style.display="flex";
        tipPair.style.paddingTop="0";
        
        let tipInfo = "";
        switch (i){
            case 0:
                tipInfo = tip1[props.index];
                tipImg.src = tip1Img[props.index];
                break;
            case 1:
                tipInfo = tip2[props.index];
                tipImg.src = tip2Img[props.index];
                break;
            case 2:
                tipInfo = tip3[props.index];
                tipImg.src = tip3Img[props.index];
                break;
            case 3:
                tipInfo = tip4[props.index];
                tipImg.src = tip4Img[props.index];
        }

        x.style.display = "block";
        tipName.textContent = tipTitles[i];
        tipContent.textContent = tipInfo;

        setTimeout(()=>{
            tipPair.classList.add('reveal3');
            tipName.classList.add('reveal');
        }, 200);


    };

    const handleTipX = () => {
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.remove('revealBox');

        const x = document.getElementById("tipX");
        x.style.display = "none";

        tipName.textContent = "";

        const tipPair = document.getElementById("tipPair");
        tipPair.style.display="none";
        tipPair.classList.remove('reveal3');

        tipName.classList.remove('reveal');

    };
    
    
    return (
        <div className = "tips">
            <div className = "fixedBanner">
                <p id = "tipTitle">Traveler's Insights</p>
            </div>

            <div className="boxContainer">
                <div id = "tipBox">
                    <div id = "tipX" onClick={()=>handleTipX()}>
                        <div className="bar"/>
                        <div className="bar"/>
                    </div>
                    <h1 id = "tipName"></h1>
                    <div className="tipPair" id = "tipPair">
                        <div className = "tipLeft">
                            <img src ={tip1Img[props.index]} id = "tipImg"></img>
                        </div>
                        <div className = "tipRight">
                            <p id = "tipContent">
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="box" id = "box0" style={{ backgroundImage: `url(${tip1Img[props.index]})` }} onClick={()=>handleTipClick(0)}>
                    <div className = "boxBack">
                        <h1>{tipTitles[0]}</h1>
                    </div>
                </div>
                <div className="box" id = "box1" style={{ backgroundImage: `url(${tip2Img[props.index]})` }} onClick={()=>handleTipClick(1)}>
                    <div className = "boxBack">
                        <h1>{tipTitles[1]}</h1>
                    </div>
                </div>
                <div className="box" id = "box2" style={{ backgroundImage: `url(${tip3Img[props.index]})` }} onClick={()=>handleTipClick(2)}>
                    <div className = "boxBack">
                        <h1>{tipTitles[2]}</h1>
                    </div>
                </div>
                <div className="box" id = "box3" style={{ backgroundImage: `url(${tip4Img[props.index]})` }} onClick={()=>handleTipClick(3)}>
                    <div className = "boxBack">
                        <h1>{tipTitles[3]}</h1>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Traveling;