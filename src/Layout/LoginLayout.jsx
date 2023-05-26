import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const LoginLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
