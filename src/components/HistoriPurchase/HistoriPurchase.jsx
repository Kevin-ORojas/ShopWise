import React from "react";

export const HistoriPurchase = ({ historial }) => {
  return (
    <div className="max-w-full mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-roboto text-slate-900">
        Historial de Compras
      </h2>
      {historial.length === 0 ? (
        <h3>No hay productos en el historial de compras.</h3>
      ) : (
        <ul>
          {historial.map(({ nombre, precio }, index) => (
            <li key={index}>
              <p>
                Producto: {nombre}, Precio: ${precio}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
