import React from "react";
import { useLoaderData } from "react-router-dom";
import RacipeCard from "../RacipeCard/RacipeCard";
import { HiHandThumbUp } from "react-icons/hi2";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeDataCard = () => {
  const recipeData = useLoaderData();

  const {
    chef_name,
    bio,
    id,
    likes,
    num_of_recipes,
    picture_url,
    years_of_experience,
    recipe,
  } = recipeData;

  return (
    <div>
      <div className='recipe-banner flex justify-center gap-8 items-center'>
        <LazyLoadImage
          src={picture_url}
          width={600}
          height={400}
          alt='Image Alt'
        ></LazyLoadImage>
        {/* <img src={picture_url} alt='' /> */}

        <div>
          <h2 className='font-bold text-4xl mb-2'>{chef_name}</h2>
          <p>{bio}</p>
          <p>{years_of_experience} years Experience</p>
          <p>{num_of_recipes} dalicious Racipe</p>
          <p className='flex gap-2 items-center'>
            <HiHandThumbUp></HiHandThumbUp>
            {likes}
          </p>
        </div>
      </div>
      <h2
        className='text-center my-8 font-bold text-3xl'
        style={{ color: "#411e08" }}
      >
        Recipe of {chef_name}....
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 wrapper mt-4'>
        {recipe.map((singleRecipe, index) => {

          < RacipeCard key={index} singleRecipe={singleRecipe} ></RacipeCard>
        }
        )}
      </div>
    </div >
  );
};

export default RecipeDataCard;
