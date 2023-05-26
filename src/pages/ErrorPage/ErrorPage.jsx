import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import errorimg from "../../assets/404.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img className='h-96 mx-auto' src={errorimg} alt='' />
      </div>
      <div className='error-info'>
        <h2 className='error-status'>
          <span>Error</span>
          {status || 404}
        </h2>
        <p className='error-message'>{error?.message}</p>
        <NavLink to='/' className='btn btn-outline'>
          Back to homepage
        </NavLink>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
