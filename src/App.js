import './main.css';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

import Home from './Home';
import Services from './Services';


import React, {useState, useEffect, Fragment} from 'react';

function App() {

    const [Page, setPage] = useState("home");

    const handlePageChange = (data) =>{
        console.log(data);

        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        setPage(data);
    };

  return (
      <Fragment>
          <Navbar viewSwapper = {handlePageChange}/>
          {(Page==="home") && (
            <Home/>
          )}
          {(Page==="about") && (
              <Home/>
          )}
          {(Page==="services") && (
              <Services/>
          )}
          {(Page==="portfolio") && (
              <Home/>
          )}
          {(Page==="media") && (
              <Home/>
          )}
          
          <Bottombar/>
      </Fragment>



  );
}

export default App;


