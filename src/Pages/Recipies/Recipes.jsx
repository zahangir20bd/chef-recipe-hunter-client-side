import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  const chef = chefs.find((chef) => {
    return chef.chef_id == id;
  });
  const { recipes } = chef;
  //   console.log(chefs);
  console.log(recipes);
  return (
    <div>
      <h2>Recipes Here of chef id: {id}</h2>
    </div>
  );
};

export default Recipes;
