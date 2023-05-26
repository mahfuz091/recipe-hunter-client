import React from "react";
import image1 from "../../assets/img-4.jpg";
import image2 from "../../assets/img-5.jpg";
import image3 from "../../assets/img-2.jpg";


const HeroSection = () => {
  return (
    <>
      <div className=' grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-12'>
        <img className='row-span-2 h-full rounded-lg' src={image3} alt='' />
        <img className='h-64 rounded-lg' src={image2} alt='' />
        <img className='h-64 rounded-lg' src={image1} alt='' />
      </div>
    </>
  );
};

export default HeroSection;
