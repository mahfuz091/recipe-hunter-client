import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-banner mt-12 '>
      <div className='lg:flex items-center justify-center gap-8'>
        <div className='ps-12 pt-14 w-3/4 lg:w-1/2 '>
          <h2 className='text-white  font-extrabold text-5xl'>Recipe Hunter</h2>
          <p className='text-white mt-4'>
            Join The Recipe Hunters in Wales as they discover the traditional
            recipes behind the most treasured Welsh dishes. Thanks to all of the
            Welsh families who opened their homes & hearts to our community!
          </p>
        </div>
        <div className='pe-12 ps-12 lg:ps-0 pt-14 lg:pt-52 pb-12 lg:pb-44'>
          <div className='flex items-center gap-1'>
            <HiLocationMarker className='text-white uppercase text-3xl'></HiLocationMarker>{" "}
            <p className='text-white uppercase text-2xl'>Banani, Dhaka</p>
          </div>
          <div className='flex items-center gap-1'>
            <HiMail className='text-white uppercase text-3xl'></HiMail>{" "}
            <p className='text-white uppercase text-2xl'>info@recipe.com</p>
          </div>
        </div>
      </div>
      <div className='lg:flex items-center justify-between px-12 lg:px-52 pb-12 gap-8'>
        <p className='text-white uppercase text-xl'>
          All right reserved @Recipe Hunter
        </p>
        <div className='text-white uppercase mt-4 lg:mt-0 text-2xl flex gap-2'>
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </div>
      </div>
    </div>
  );
};

export default Footer;
