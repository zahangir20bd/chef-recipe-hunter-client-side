import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import { useLoaderData } from "react-router-dom";

const Chefs = () => {
  const chefs = useLoaderData();
  return (
    <div className="mt-20">
      <h2 className="text-center text-4xl font-bold">Our All Chefs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-10 gap-6">
        {/* All chef data load by using map() method */}
        {chefs.map((chef) => (
          <Chef key={chef.chef_id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
