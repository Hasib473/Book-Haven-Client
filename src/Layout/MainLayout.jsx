import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=''>
          <Navbar/>

          <div className=' mb-8 '>
            <Outlet/>
          </div>

          <Footer/>
        </div>
    );
};

export default MainLayout;