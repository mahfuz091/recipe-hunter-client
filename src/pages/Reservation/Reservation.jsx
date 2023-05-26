import React from "react";

const Reservation = () => {
  return (
    <div className='reservation-banner mt-8'>
      <div className=''>
        <h2
          className='uppercase text-2xl font-semibold text-center pt-16  '
          style={{ color: "#411e08" }}
        >
          Reservation
        </h2>
        <h2
          className='uppercase text-3xl font-extrabold text-center mt-4'
          style={{ color: "#411e08" }}
        >
          Book Your Chef
        </h2>
        <div className='text-center mt-4  '>
          <input
            className='border rounded p-4'
            type='text'
            placeholder='Name'
          />
          <input
            className='border rounded p-4 ms-0 mt-2 lg:mt-0 lg:ms-2'
            type='text'
            placeholder='Email'
          />
        </div>
        <div className='text-center mt-4 '>
          <input
            className='border rounded p-4 '
            type='text'
            placeholder='Date'
          />
          <input
            className='border rounded p-4 ms-0 mt-2 lg:mt-0 lg:ms-2 '
            type='text'
            placeholder='Time'
          />
        </div>
        <div className='text-center mt-4'>
          <button
            style={{ color: "#411e08", background: "#ffc033" }}
            className=' px-4 py-2 rounded-xl  ms-2 mb-16'
          >
            Find A Chef
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
