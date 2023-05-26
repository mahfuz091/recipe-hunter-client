import React from "react";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const ChefRecipeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer ></Footer>
    </div>
  );
};

export default ChefRecipeLayout;
