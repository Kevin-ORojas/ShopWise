import React, { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (nombre, precio) => {
    if (nombre === "") return;
    if (precio === "" || precio === 0) return;

    const existe = products.find(
      (product) =>
        product.nombre.toLowerCase() === nombre.toLowerCase() &&
        product.precio === precio
    );

    if (existe !== -1) {
      const nuevoProduct = {
        id: Date.now(),
        nombre,
        precio, // precio original
        cantidad: 1, //inicializamos cantidad en 1
      };
      setProducts([...products, nuevoProduct]);
    }
  };

  // sumar elementos si se van agregando
  const addProductQuantity = (id, quantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          cantidad: product.cantidad + quantity, // aumentamos la cantidad
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  const sumPrices = () => {
    return products.reduce(
      (total, product) => total + product.precio * product.cantidad,
      0
    );
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
    addProductQuantity,
  };
};
