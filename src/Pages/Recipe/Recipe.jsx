import React, { useState } from "react";
import { FaBeer, FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  // favorite button handler, by click the button a toast alert will show and button will disable
  const handleFavorite = () => {
    toast("This Recipe added to your Favorite List.");
    setFavorite(true);
  };

  // food ordered handler
  const handleOrdered = () => {
    toast(
      "We have received your order, Keep patience, your food will deliver between 30 Minutes"
    );
  };
  // destructure element from recipe object
  const { recipe_picture, recipe_name, ingredients, cooking_method, ratings } =
    recipe;
  return (
    <div className="mx-auto">
      <div className="card h-[900px] card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[400px] h-[250px] rounded-lg"
            src={recipe_picture}
            alt="recipe image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold"> {recipe_name}</h2>
          <p className="text-xl list-none font-semibold">
            Ingredients:
            {ingredients?.map((ingredient) => (
              <li className="text-sm">{ingredient}</li>
            ))}
          </p>
          <p className="text-xl list-none font-semibold">
            Cooking Method:
            {cooking_method?.map((method) => (
              <li className="text-sm ">{method}</li>
            ))}
          </p>
          <button onClick={handleOrdered} className="btn btn-primary">
            Order
          </button>
          <div className="flex ">
            {/* Use Rating symbol */}
            <Rating
              placeholderRating={ratings}
              emptySymbol={<FaRegStar></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className="flex-1">{ratings}</span>
            <button onClick={handleFavorite} disabled={favorite}>
              <FaHeart></FaHeart>
              <ToastContainer />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
