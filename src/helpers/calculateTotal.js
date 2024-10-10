import React, { useState } from "react";

export const calculateTotal = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const sumaProductos = () => {
    // Aquí se haría la lógica para sumar todos los productos
  };

  return {
    count,
    increment,
    sumaProductos,
  };
};
