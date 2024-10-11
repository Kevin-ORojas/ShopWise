import React, { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const handleChangeQuantity = () => {
    setCantidad(cantidad + 1);
  };

  const addProduct = (nombre, precio) => {
    if (nombre === "") return;

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

  const incrementQuanity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          cantidad: product.cantidad + 1, // aumentamos la cantidad
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return {
    products,
    addProduct,
    sumPrices,
    incrementQuanity,
    removeProduct,
  };
};
