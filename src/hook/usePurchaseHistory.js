import { useState, useEffect } from "react";

export const usePurchaseHistory = () => {
  const [historiPurchase, setHistoriPurchase] = useState([]);

  useEffect(() => {
    const histori = JSON.parse(localStorage.getItem("historiPurchase") || "[]");
    if (histori) {
      setHistoriPurchase(histori);
    }
  }, []);

  const agregarProducto = (product) => {
    const date = new Date().toLocaleDateString(); // Formato de fecha: DD/MM/YYYY
    const newHistoryItem = { ...product, date };

    // Verificar si ya existe una entrada para la fecha actual
    const index = historiPurchase.findIndex((item) => item.date === date);
    let updatedHistori;

    if (index !== -1) {
      // Si existe, crea un nuevo array manteniendo las entradas originales
      updatedHistori = historiPurchase.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            products: [...item.products, newHistoryItem], // Añadimos el nuevo producto sin mutar
          };
        }
        return item;
      });
    } else {
      // Si no existe, crea una nueva entrada
      updatedHistori = [
        ...historiPurchase,
        { date, products: [newHistoryItem] },
      ];
    }

    // Guardar el nuevo historial en localStorage
    localStorage.setItem("historiPurchase", JSON.stringify(updatedHistori));
    setHistoriPurchase(updatedHistori); // Actualizar el estado
  };

  return { historiPurchase, agregarProducto };
};
