import React from "react";
import { Link } from "react-router-dom";
import { usePurchaseHistory } from "../../hook/usePurchaseHistory";

export const Nav = () => {
  // Puedes agregar lógica aquí para manejar el historial si es necesario
  const { historiPurchase } = usePurchaseHistory();

  return (
    <nav className="bg-slate-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
            Agregar Productos
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
    </nav>
  );
};
