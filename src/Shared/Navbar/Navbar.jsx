import React, { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(AuthContext);
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
            <NavLink>Blogs</NavLink>
          </li>

          <li>
            <NavLink>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <div>
          <FaUserCircle style={{ fontSize: "40px" }}></FaUserCircle>
        </div>
        {user ? (
          <button className=" ms-3 font-semibold">
            <FaSignOutAlt style={{ fontSize: "40px" }}></FaSignOutAlt>
          </button>
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
