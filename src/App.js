import './main.css';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Nomatch from './Nomatch';

import Portfolioentry from './Portfolioentry';
import Portfolioselect from './Portfolioselect';

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
                <Route path="/portfolio" element={<Portfolio />}>
                    
                    <Route path="" element={<Portfolioselect/>} />
                    <Route path="western" element={<Portfolioentry index = {0}/>} />
                    <Route path="glendale" element={<Portfolioentry index = {1}/>} />
                    <Route path="cucamonga" element={<Portfolioentry index = {2}/>} />
                    <Route path="site4" element={<Portfolioentry index = {3}/>} />
                    <Route path="site5" element={<Portfolioentry index = {4}/>} />
                    
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Nomatch />} />
          </Routes>
          
          <Bottombar/>
      </Router>
      </Fragment>



  );
}

export default App;


