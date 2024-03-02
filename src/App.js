import './main.css';

import Navbar from './Navbar';
import Bottombar from './Bottombar';

import Home from './Home';
import Services from './Services';


import React, {useState, useEffect, Fragment} from 'react';

function App() {

    const [Page, setPage] = useState(0);

    const handlePageChange = (data) =>{
        console.log(data);
        setPage(data);
    };

  return (
      <Fragment>
          <Navbar viewSwapper = {handlePageChange}/>
          {(Page===0) && (
            <Home/>
          )}
          {(Page===1) && (
              <Home/>
          )}
          {(Page===2) && (
              <Services/>
          )}
          {(Page===3) && (
              <Home/>
          )}
          {(Page===4) && (
              <Home/>
          )}
          
          <Bottombar/>
      </Fragment>



  );
}

export default App;


