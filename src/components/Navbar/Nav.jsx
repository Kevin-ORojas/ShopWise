import React from "react";

export const Nav = () => {
  return (
    <nav className="w-full py-4 bg-slate-500">
      <ul className="flex justify-end px-4">
        <li className="ml-4">
          <a href="#">Home</a>
        </li>
        <li className="ml-4">
          <a href="#">Productos</a>
        </li>
        <li className="ml-4">
          <a href="#">Historial Compras</a>
        </li>
      </ul>
    </nav>
  );
};
