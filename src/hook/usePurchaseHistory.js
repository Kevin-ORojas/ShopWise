import { useState, useEffect } from "react";

export const usePurchaseHistory = () => {
  const [historiPurchase, setHistoriPurchase] = useState([]);

  useEffect(() => {
    const histori = JSON.parse(localStorage.getItem("historiPurchase"));
    if (histori) {
      setHistoriPurchase(histori);
    }
  }, []);

  const agregarProducto = (product) => {
    const timeHistori = new Date().toLocaleString();
    const newHistoryItem = { ...product, date: timeHistori }; // Guarda el producto con la fecha
    const nuevoHistorial = [...historiPurchase, newHistoryItem]; // Cambia nuevoProducto a newHistoryItem
    setHistoriPurchase(nuevoHistorial);

    // Guardar el nuevo historial en localStorage
    localStorage.setItem("historiPurchase", JSON.stringify(nuevoHistorial));
  };

  return { historiPurchase, agregarProducto };
};
