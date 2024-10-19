import React, { useState } from "react";

export const HistoriPurchase = ({ historial }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const calculateTotalPrice = () => {
    return historial.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };
  return (
    <div className="max-w-full mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <h2
        className="text-2xl font-bold font-roboto text-slate-900 cursor-pointer"
        onClick={toggleVisibility}
      >
        Historial de Compras {isVisible ? "▲" : "▼"}
      </h2>
      <div className=" mt-4 bg-orange-300">
        {isVisible && (
          <div className="flex justify-around">
            <ul>
              {historial.length === 0 ? (
                <p>No hay productos en el historial de compras.</p>
              ) : (
                historial.map(({ nombre, precio, date }, index) => (
                  <div
                    className="flex gap-8 border-b-2 border-r-2 border-t-2 border-l-2 mt-4"
                    key={index}
                  >
                    <p>Producto: {nombre}</p>
                    <p>Precio: ${precio}</p>
                    <h2>Fecha: {date}</h2>
                  </div>
                ))
              )}
            </ul>
            <h3 className="font-bold">
              Precio Total: ${calculateTotalPrice()}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
