import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Chefs from "./Chefs/Chefs";
import SpecialServices from "../SpecialServices/SpecialServices";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <SpecialServices></SpecialServices>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
