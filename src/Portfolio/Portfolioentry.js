
import React, {useState, useEffect, Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Portfolio.css';

import Western from './Western.js'
let titles = ["Western Municipal","Glendale Water and Power","Cucamonga Valley Water","Loopy","Loopy2"]

let portfolios = [Western,Western,Western,Western,Western]

function Portfolioentry(props){

    const PortfolioComponent = portfolios[props.index];

    useEffect(()=>{
        setTimeout(() => {
            window.scrollTo({
                top:900,
                behavior: "smooth"
            });
        }, 10);
        
    },[]);
    
    return (
        <Fragment>
            <div className={"centerText"}>
                <Nav.Link as = {Link} to = "/portfolio" className = "navbarItem">
                    Back to map
                </Nav.Link>
            </div>

            <PortfolioComponent/>
        </Fragment>
        

    );
}

export default Portfolioentry;