import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-full flex items-center  py-4 bg-slate-500 px-4">
      <p>Logo</p>
      <div className="flex w-full justify-end gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>agregar productos</Link>
        <Link to={"/login"}>Login</Link>

        <Link to={"/register"}>register</Link>
      </div>
    </nav>
  );
};
