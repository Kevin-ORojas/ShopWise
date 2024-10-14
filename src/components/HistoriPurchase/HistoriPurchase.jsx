import React, { useState } from "react";

export const HistoriPurchase = ({ historial }) => {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del historial

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const calculateTotalPrice = () => {
    return historial.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  return (
    <div className="max-w-full mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold font-roboto text-slate-900"
        onClick={toggleVisibility}
        style={{ cursor: "pointer" }}
      >
        Historial de Compras {isVisible ? "▲" : "▼"}
      </h2>
      {isVisible && (
        <>
          <ul>
            {historial.length === 0 ? (
              <p>No hay productos en el historial de compras.</p>
            ) : (
              historial.map(({ nombre, precio, date }, index) => (
                <li key={index}>
                  <p>
                    Producto: {nombre}, Precio: ${precio}, Fecha: {date}
                  </p>
                </li>
              ))
            )}
          </ul>
          <h3 className="font-bold">Precio Total: ${calculateTotalPrice()}</h3>
        </>
      )}
    </div>
  );
};
