import React from "react";
import birthday from "./../../assets/images/birthday.png";
import wedding from "./../../assets/images/wedding.png";
import meeting from "./../../assets/images/meeting.png";

const SpecialServices = () => {
  return (
    <div className="mt-28">
      <h2 className="text-center text-4xl font-bold mb-10">
        Our Special Services
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-center px-6">
          <img className="mx-auto" src={birthday} alt="" />
          <h2 className="text-3xl font-bold">Birthday</h2>
          <p>
            Book a table for two with the best dishes served for the
            anniversary. Or reserve a bigger one for a huge family to get
            together one sunny day. Gather your friends together.
          </p>
        </div>
        <div className="text-center px-6">
          <img className="mx-auto" src={meeting} alt="" />
          <h2 className="text-3xl font-bold">Meetings</h2>
          <p>
            You can also impress your boss by choosing the best place for
            corporate party with your co-workers. Reserve a spacious room, set
            the menu, choose the drinks and invite guests.
          </p>
        </div>
        <div className="text-center px-6">
          <img className="mx-auto" src={wedding} alt="" />
          <h2 className="text-3xl font-bold">Weddings</h2>
          <p>
            200 seats for 200 guests are all at your disposal. Organize a party
            for a huge company and have fun in the restaurant. Show your friends
            the real world of best vibes dishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialServices;
