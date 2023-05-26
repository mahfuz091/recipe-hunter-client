import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiHandThumbUp } from "react-icons/hi2";

import { AuthContext } from "../../providers/AuthProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefDataCard = ({ chef }) => {
  const { loading } = useContext(AuthContext);
  const {
    chef_name,
    id,
    likes,
    num_of_recipes,
    picture_url,
    years_of_experience,
  } = chef;
  if (loading) {
    return (
      <div className='flex items-center justify-center '>
        <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
      </div>
    );
  }
  return (
    <div>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <LazyLoadImage className='card-img p-4' src={picture_url} />
          {/* <img src={picture_url} alt='Chef' className='card-img p-4' /> */}
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{chef_name}</h2>
          <p>{years_of_experience} years Experience</p>
          <p>{num_of_recipes} dalicious Racipe</p>
          <p className='flex gap-2 items-center'>
            <HiHandThumbUp></HiHandThumbUp>
            {likes}
          </p>
          <div className='card-actions justify-end'>
            <Link
              to={`/chef/${id}`}
              className='border rounded-xl px-6 '
              style={{ color: "#411e08", background: "#ffc033" }}
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDataCard;
