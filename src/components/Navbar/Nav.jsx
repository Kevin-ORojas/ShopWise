import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="bg-slate-700 shadow-lg py-4 flex">
      <button
        className="md:hidden h-20  text-white focus:outline-none"
        onClick={toggleNav}
      >
        <MenuIcon />
      </button>
      <div
        className={` sm:w-full md:flex md:items-center md:space-x-6 transition duration-700 ease-in-out ${
          showNav ? "block" : "hidden"
        } transition duration-700 ease-in-out`}
      >
        <div className="md:flex md:justify-end w-full px-4 gap-4">
          <div className="md:flex md:justify-start w-full">
            {" "}
            <p className="text-white">Logo</p>
          </div>
          <Link
            className="text-white hover:text-slate-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 p-2 rounded-sm hover:bg-indigo-500 duration-300"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-slate-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 p-2 rounded-sm hover:bg-indigo-500 duration-300"
            to={"/products"}
          >
            Productos
          </Link>
          <Link
            className="text-white hover:text-slate-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 p-2 rounded-sm hover:bg-indigo-500 duration-300"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="text-white hover:text-slate-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 p-2 rounded-sm hover:bg-indigo-500 duration-300"
            to={"/historial"}
          >
            Historial
          </Link>
          <Link
            className="text-white hover:text-slate-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 p-2 rounded-sm hover:bg-indigo-500 duration-300"
            to={"/register"}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
