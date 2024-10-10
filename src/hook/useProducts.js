import React, { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (nombre, precio) => {
    // Validación para evitar campos vacíos
    if (typeof nombre !== "string" || nombre.trim() === "") return;
    if (precio === null || isNaN(precio)) return;

    const existe = products.find(
      (product) =>
        product.nombre.toLowerCase() === nombre.toLowerCase() &&
        product.precio === precio
    );
    if (!existe) {
      const nuevoProduct = {
        id: Date.now(),
        nombre,
        precio,
      };
      setProducts([...products, nuevoProduct]);
    }
  };

  const sumPrices = () => {
    return products.reduce((total, product) => total + product.precio, 0);
  };

  const removeProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return {
    products,
    addProduct,
    sumPrices,
    removeProduct,
  };
};
