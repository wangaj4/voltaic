import './main.css';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Nomatch from './Nomatch';

import Portfolio from './Portfolio/Portfolio';


import Portfolioentry from './Portfolio/Portfolioentry';
import Portfolioselect from './Portfolio/Portfolioselect';

import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import AOS from "aos";
import "aos/dist/aos.css";
function App() {

    useEffect(()=>{
        AOS.init()
    },[]);


    /*
        <Route path="/portfolio" element={<Portfolio />}>
                        
            <Route path="" element={<Portfolioselect/>} />
            <Route path="western" element={<Portfolioentry index = {0}/>} />
            <Route path="glendale" element={<Portfolioentry index = {1}/>} />
            <Route path="cucamonga" element={<Portfolioentry index = {2}/>} />
            
        </Route>
    */

  return (
    <Fragment>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        
      <Router>
          <Navbar/>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Nomatch />} />
          </Routes>
          
          <Bottombar/>
      </Router>
      </Fragment>



  );
}

export default App;


