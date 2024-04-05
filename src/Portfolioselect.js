import './main.css';
import './Portfolio.css';

import React, {useState, useEffect, Fragment} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Portfolioselect(){

    
    return (
        <Fragment>
            <div className='spacer'/>
            <div className={"centerText"}>
                <Nav.Link as = {Link} to = "western" className = "navbarItem">
                    Western Municipal
                </Nav.Link>
                <Nav.Link as = {Link} to = "glendale" className = "navbarItem">
                    Glendale Water and Power
                </Nav.Link>
                <Nav.Link as = {Link} to = "cucamonga" className = "navbarItem">
                    Cucamonga Valley Water
                </Nav.Link>
                <Nav.Link as = {Link} to = "site4" className = "navbarItem">
                    site4
                </Nav.Link>
                <Nav.Link as = {Link} to = "site5" className = "navbarItem">
                    site5
                </Nav.Link>
            </div>
        </Fragment>
        

    );
}

export default Portfolioselect;