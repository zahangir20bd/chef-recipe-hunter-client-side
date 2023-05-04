import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    // <div className="navbar flex flex-col md:flex-row bg-base-100">
    //   <div className="flex md:items-center">
    //     <a className="btn btn-ghost normal-case text-xl">Recipe Haven</a>
    //   </div>
    //   <div className="flex-1 flex-col md:flex-row">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <a>Item 1</a>
    //       </li>
    //       <li>
    //         <a>Item 2</a>
    //       </li>
    //       <li>
    //         <a>Item 3</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div>
    //     <button className="px-4 rounded-lg bg-blue-500 hover:bg-blue-700 py-2 text-xl text-white ms-2">
    //       Login
    //     </button>
    //     <button className="px-4 rounded-lg bg-blue-500 hover:bg-blue-700 py-2 text-xl text-white ms-2">
    //       Logout
    //     </button>
    //     <button className="px-4 rounded-lg bg-blue-500 hover:bg-blue-700 py-2 text-xl text-white ms-2">
    //       Register
    //     </button>
    //   </div>
    // </div>

    <div className="md:flex justify-between items-center mx-auto p-2">
      <h2 className="text-2xl font-bold my-4">
        <Link to="/">Recipe Haven</Link>
      </h2>
      <nav>
        {/* <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-8 w-8 text-[#a746e7]" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-[#a746e7]" />
            )}
          </span>
        </div> */}
        <ul className="flex flex-col md:flex-row gap-3 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink>About</NavLink>
          </li>

          <li>
            <NavLink to="/chefs">Chefs</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <button className=" btn btn-primary text-white ms-3 font-semibold">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-primary text-white ms-3 font-semibold">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
