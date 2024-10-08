import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-full py-4 bg-slate-500">
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>agregar productos</Link>
      <Link to={"/login"}>Login</Link>

      <Link to={"/register"}>register</Link>
    </nav>
  );
};
