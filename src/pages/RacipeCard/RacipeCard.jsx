import React from "react";
import { Rating } from "@smastrom/react-rating";
import toast, { Toaster } from "react-hot-toast";
import "@smastrom/react-rating/style.css";

const RacipeCard = ({ singleRecipe }) => {
  const notify = (event) => {
    toast("Added the recipe is your favorite.");
    event.currentTarget.disabled = true;
  };

  const { cooking_method, ingredients, rating, recipe_name } = singleRecipe;
  return (
    <div>
      <div className='card h-full w-100 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title mx-auto mb-4'>{recipe_name}</h2>
          <h3 className='font-semibold'>Ingredients</h3>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
          <h3 className='font-semibold'>How to Cook:</h3>
          <p>{cooking_method}</p>
          <div className='flex gap-1 items-center'>
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating || 0)}
              readonly
            />
            <span>{rating}</span>
          </div>
          <div className='card-actions justify-end'>
            <button onClick={notify} className='btn border-none btn-favorite'>
              Favorite
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacipeCard;
