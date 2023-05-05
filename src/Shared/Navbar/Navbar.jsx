import React, { useContext, useState } from "react";
import "./../../App.css";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="md:flex justify-between items-center mx-auto p-2">
      <h2 className="text-2xl font-bold my-4">
        <Link to="/">Recipe Haven</Link>
      </h2>
      <nav>
        <ul className="flex flex-col md:flex-row gap-3 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center">
            <FaUserCircle style={{ fontSize: "40px" }}></FaUserCircle>
            <button onClick={handleLogOut} className=" ms-3 font-semibold">
              <FaSignOutAlt style={{ fontSize: "40px" }}></FaSignOutAlt>
            </button>
          </div>
        ) : (
          <button className=" btn btn-primary text-white ms-3 font-semibold">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
