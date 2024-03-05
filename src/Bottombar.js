import React, { useState, useEffect } from 'react';
import './Bottombar.css';

import templogo from './img/templogo.png';

function Bottombar(props){
    return (
        <div id = "bottomBar">
            <div className={"bottomContent"}>
                <div className={"bottomCol"}>
                    <img src = {templogo} id="bigLogo"/>
                </div>
                <div className={"bottomCol"}>
                    business@voltaicanalytica.com
                    <br/><br/>
                    (000)000-0000
                    <br/><br/>
                    1234 Riverside Ave, Riverside, CA
                </div>
                <div className={"bottomCol"}>
                    Instagram
                    <br/><br/>
                    Facebook
                    <br/><br/>
                    Twitter
                </div>
            </div>
        </div>
    );
}

export default Bottombar;