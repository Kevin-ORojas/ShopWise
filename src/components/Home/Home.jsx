import React from "react";

export const Home = () => {
  return (
    <div className="bg-blue-300 min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-center text-2xl font-bold">
          Bienvenido a Tu lista de Mercados.
        </h1>
        <p className="text-center mt-4">
          Organiza tus compras, ahorra tiempo con nuestra app de lista de
          mercados. Crea listas personalizadas, comparte con tu familia y nunca
          olvides un artículo de nuevo.
        </p>
      </div>
    </div>
  );
};
