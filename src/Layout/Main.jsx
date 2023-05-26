import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Reservation from "../pages/Reservation/Reservation";
import Footer from "../pages/Footer/Footer";
import HeroSection from "../pages/HeroSection/HeroSection";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='banner'>
        <div className='banner-content'>
          <h2 className='banner-content-title'>
            Recipes of your favorite Chef
          </h2>
          <button className='rounded-2xl text-2xl mt-3 text-white bg-orange-400 p-4'>
            Recipe
          </button>
        </div>
      </div>

      <div className='wrapper'>
        <HeroSection></HeroSection>
      </div>

      <Outlet />
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  );
};

export default Main;
