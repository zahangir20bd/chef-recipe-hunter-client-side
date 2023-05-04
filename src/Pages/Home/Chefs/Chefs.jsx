import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import { useLoaderData } from "react-router-dom";

const Chefs = () => {
  //   const [chefs, setChefs] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/chefs")
  //       .then((res) => res.json())
  //       .then((data) => setChefs(data));
  //   }, []);
  const chefs = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-20 gap-6">
      {chefs.map((chef) => (
        <Chef key={chef.chef_id} chef={chef}></Chef>
      ))}
    </div>
  );
};

export default Chefs;
