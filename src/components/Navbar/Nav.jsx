import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePurchaseHistory } from "../../hook/usePurchaseHistory";

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="bg-slate-700 shadow-lg">
      <button className="md:hidden" onClick={toggleNav}>
        {showNav ? "Hide menu" : "Show menu"}
      </button>
      {showNav && (
        <div
          className={`absolute top-16 left-0 w-full bg-gray-100 p-4 shadow-md transition-transform duration-300 ${
            showNav ? "block" : "hidden"
          }`}
        >
          <div className="text-white text-xl font-bold">
            <p>Logo</p>
          </div>
          <div className="flex space-x-6">
            <Link
              className="text-white hover:text-slate-300 transition duration-200"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-slate-300 transition duration-200"
              to={"/products"}
            >
              Productos
            </Link>
            <Link
              className="text-white hover:text-slate-300 transition duration-200"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="text-white hover:text-slate-300 transition duration-200"
              to={"/historial"}
            >
              Historial
            </Link>
            <Link
              className="text-white hover:text-slate-300 transition duration-200"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
