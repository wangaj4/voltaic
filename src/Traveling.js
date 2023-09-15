import React, { useState, useEffect } from 'react';

import './Traveling.css';

import grandCanyonTip from './img/TipBackground/grandCanyonTip.jpg'
import haLongBayTip from './img/TipBackground/haLongBayTip.jpg'
import auroraBorealisTip from './img/TipBackground/auroraBorealisTip.jpg'
import santoriniTip from './img/TipBackground/santoriniTip.jpg'
import machuPicchuTip from './img/TipBackground/machuPicchuTip.jpg'
import amazonTip from './img/TipBackground/amazonTip.jpg'
import victoriaTip from './img/TipBackground/victoriaTip.jpg'



import canyon3 from './img/Tips/canyon3.jpg'



const tipImg = [grandCanyonTip,haLongBayTip, auroraBorealisTip, santoriniTip, machuPicchuTip, amazonTip, victoriaTip]


const tip1Img = []
const tip2Img = []
const tip3Img = [canyon3]
const tip4Img = []

const tip1 = [
    "Safety First",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip2 = [
    "Plan Ahead",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip3 = [
    "",

    "",

    "",

    "",

    "",

    "",

    ""
]

const tip4 = [
    "",

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

    const handleTipClick = (i) => {
        //const name = "box" + i;
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.add('revealBox');

        const x = document.getElementById("tipX");

        setTimeout(()=>{
            x.style.display = "block";
        },100);


    };

    const handleTipX = () => {
        const tipBox = document.getElementById("tipBox");
        tipBox.classList.remove('revealBox');

        const x = document.getElementById("tipX");
        x.style.display = "none";
        

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
                </div>
                <div className="box" id = "box0" style={{ backgroundImage: `url(${tip1Img[props.index]})` }} onClick={()=>handleTipClick(0)}>
                    <div className = "boxBack">
                        <h1>Best Time to Visit</h1>
                    </div>
                </div>
                <div className="box" id = "box1" style={{ backgroundImage: `url(${tip2Img[props.index]})` }} onClick={()=>handleTipClick(1)}>
                    <div className = "boxBack">
                        <h1>Safety</h1>
                    </div>
                </div>
                <div className="box" id = "box2" style={{ backgroundImage: `url(${tip3Img[props.index]})` }} onClick={()=>handleTipClick(2)}>
                    <div className = "boxBack">
                        <h1>Responsible Tourism</h1>
                    </div>
                </div>
                <div className="box" id = "box3" style={{ backgroundImage: `url(${tip4Img[props.index]})` }} onClick={()=>handleTipClick(3)}>
                    <div className = "boxBack">
                        <h1>Planning and Preparation</h1>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Traveling;