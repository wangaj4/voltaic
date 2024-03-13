import './main.css';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

import Home from './Home';
import About from './About';
import Services from './Services';



import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function App() {

    const [Page, setPage] = useState("home");

    const handlePageChange = (data) =>{
        if(data===Page){
            return;
        }

        document.getElementsByClassName("encompass")[0].classList.add("fade");

        setTimeout(()=>{
            window.scrollTo({
                top:0,
                behavior: "instant"
            });
            setPage(data);

        },300)






    };

  return (
      <Router>
          <Navbar viewSwapper = {handlePageChange}/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
          </Routes>
          {/*{(Page==="home") && (*/}
          {/*  <Home checkPage ={Page}/>*/}
          {/*)}*/}
          {/*{(Page==="about") && (*/}
          {/*    <About/>*/}
          {/*)}*/}
          {/*{(Page==="services") && (*/}
          {/*    <Services/>*/}
          {/*)}*/}
          {/*{(Page==="portfolio") && (*/}
          {/*    <Home/>*/}
          {/*)}*/}
          {/*{(Page==="media") && (*/}
          {/*    <Home/>*/}
          {/*)}*/}
          
          <Bottombar/>
      </Router>



  );
}

export default App;


