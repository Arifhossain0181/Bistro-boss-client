import React from 'react';
import { Outlet,useLocation } from 'react-router';
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navbar'
const Main = () => {
    const location  = useLocation()
    console.log(location)
    const noheaderfooter = location.pathname.includes('login') ||  location.pathname.includes('signu') 

    return (
        <div>
           {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
          {noheaderfooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;