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
    "Grand Canyon time to visit test",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip2 = [
    "Grand Canyon safety test",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip3 = [
    "Grand Canyon responsibility test",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip4 = [
    "Grand Canyon planning test",

    "",

    "",

    "",

    "",

    "",

    ""
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
    let tipContent = document.getElementById("tipContent");
    
    const handleTipClick = (i) => {
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.add('revealBox');

        const x = document.getElementById("tipX");


        setTimeout(()=>{
            x.style.display = "block";
            tipName.textContent = tipTitles[i];
            let tipInfo = "";
            switch (i){
                case 0:
                    tipInfo = tip1[props.index];
                    break;
                case 1:
                    tipInfo = tip2[props.index];
                    break;
                case 2:
                    tipInfo = tip3[props.index];
                    break;
                case 3:
                    tipInfo = tip4[props.index];
            }
            tipContent.textContent = tipInfo;
        },100);


    };

    const handleTipX = () => {
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.remove('revealBox');

        const x = document.getElementById("tipX");
        x.style.display = "none";

        tipName.textContent = "";
        tipContent.textContent = "";
        

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
                    <p id = "tipContent"></p>
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