import React, { useState, useEffect } from 'react';

import './Traveling.css';

import grandCanyonTip from './img/TipBackground/grandCanyonTip.jpg'
import haLongBayTip from './img/TipBackground/haLongBayTip.jpg'
import auroraBorealisTip from './img/TipBackground/auroraBorealisTip.jpg'
import santoriniTip from './img/TipBackground/santoriniTip.jpg'
import machuPicchuTip from './img/TipBackground/machuPicchuTip.jpg'
import amazonTip from './img/TipBackground/amazonTip.jpg'
import victoriaTip from './img/TipBackground/victoriaTip.jpg'

const tipImg = [grandCanyonTip,haLongBayTip, auroraBorealisTip, santoriniTip, machuPicchuTip, amazonTip, victoriaTip]


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
    
    
    return (
        <div className = "tips">
            <div className = "fixedBanner">
                <p id = "tipTitle">Traveler's Insights</p>
            </div>

            <div className="container">
                <div className="box">
                    <div className = "boxBack"/>
                    <h1>Best Time to Visit</h1>
                </div>
                <div className="box">
                    <div className = "boxBack"/>
                    <h1>Safety</h1>
                </div>
                <div className="box">
                    <div className = "boxBack"/>
                    <h1>Responsible Tourism</h1>
                </div>
                <div className="box">
                    <div className = "boxBack"/>
                    <h1>Planning and Preparation</h1>
                </div>
            </div>

            
        </div>
    );
}

export default Traveling;