import React, { useState } from "react";

export const HistoriPurchase = ({ historial }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleDate, setVisibleDate] = useState(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Obtener fechas únicas usando filter
  const uniqueDates = historial
    .map((item) => item.date)
    .filter((date, index, self) => self.indexOf(date) === index);

  const handleDateClick = (date) => {
    setVisibleDate(visibleDate === date ? null : date);
  };

  const getProductsByDate = (date) => {
    return historial.filter((item) => item.date === date);
  };

  const calculateTotalPrice = (date) => {
    const products = getProductsByDate(date);
    return products.reduce((total, item) => total + item.precio, 0).toFixed(2);
  };

  return (
    <div className="max-w-full mx-auto mt-8 p-6 rounded-lg shadow-lg">
      {/* Título del historial de compras */}
      <div className="header">
        <h2
          className="text-2xl font-bold font-roboto text-slate-900 cursor-pointer"
          onClick={toggleVisibility}
        >
          Historial de Compras {isVisible ? "▲" : "▼"}
        </h2>
      </div>

      {/* Contenedor del historial */}
      {isVisible && (
        <div className="mt-4 bg-orange-300">
          <ul>
            {uniqueDates.length === 0 ? (
              <p>No hay compras registradas.</p>
            ) : (
              uniqueDates.map((date) => (
                <div key={date}>
                  <h3
                    className="cursor-pointer mt-2"
                    onClick={() => handleDateClick(date)}
                  >
                    Fecha: {date} {visibleDate === date ? "▲" : "▼"}
                  </h3>
                  {/* Lista de productos de la fecha seleccionada */}
                  {visibleDate === date && (
                    <div className="flex flex-col border-l-2 pl-2">
                      {getProductsByDate(date).map(
                        ({ nombre, precio }, index) => (
                          <div
                            className="flex justify-between border-b-2 border-gray-500 mt-1"
                            key={index}
                          >
                            <p>Producto: {nombre}</p>
                            <p>Precio: ${precio}</p>
                          </div>
                        )
                      )}
                      <h4 className="font-bold">
                        Precio Total: ${calculateTotalPrice(date)}
                      </h4>
                    </div>
                  )}
                </div>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
