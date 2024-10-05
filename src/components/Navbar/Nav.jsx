import React from "react";

export const Nav = () => {
  return (
    <nav className="w-full py-4 bg-slate-500">
      <ul className="flex justify-end px-4">
        <li className="ml-4">
          <a href="#">Home</a>
        </li>
        <li className="ml-4">
          <a href="#">About</a>
        </li>
        <li className="ml-4">
          <a href="#">Products</a>
        </li>
        <li className="ml-4">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
