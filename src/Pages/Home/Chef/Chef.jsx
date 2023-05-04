import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  //   console.log(chef);
  const { chef_id, chef_name, chef_picture, experience, likes, recipes } = chef;

  return (
    <div className="mx-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="max-w-[400px] max-h-[350px] rounded-lg"
            src={chef_picture}
            alt="chef image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <h4 className="text-xl">Experience: {experience}</h4>
          <h5>Numbers of Recipes: {recipes.length}</h5>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/${chef_id}/recipes`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
