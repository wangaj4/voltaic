import './main.css';
import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';

let titles = ["Western Municipal","Glendale Water and Power","Cucamonga Valley Water","Loopy","Loopy2"]


function Portfolioentry(props){

    useEffect(()=>{
        console.log(props.index);
    },[]);
    
    return (
        <Fragment>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    {titles[props.index]}
                </div>
            </div>
        </Fragment>
        

    );
}

export default Portfolioentry;