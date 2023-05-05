import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import LazyLoad from "react-lazy-load";

const Recipes = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  const chef = chefs.find((chef) => {
    return chef.chef_id == id;
  });
  const { chef_id, chef_name, chef_picture, experience, likes, recipes } = chef;
  return (
    <div className="mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <LazyLoad>
            <img className="max-h-[450px]" src={chef_picture} alt="Album" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{chef_name}</h2>
          <h2 className="text-xl font-semibold">Chef ID: {chef_id}</h2>
          <h4 className="text-xl">Experience: {experience}</h4>
          <h5 className="text-xl">Numbers of Recipes: {recipes.length}</h5>
          <p className="text-xl">Likes: {likes}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-20 gap-6">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
