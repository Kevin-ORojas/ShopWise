import { useState, useEffect } from "react";

export const usePurchaseHistory = () => {
  const [historiPurchase, setHistoriPurchase] = useState([]);

  useEffect(() => {
    const histori = JSON.parse(localStorage.getItem("historiPurchase"));
    if (histori) {
      setHistoriPurchase(histori);
    }
  }, []);

  const agregarProducto = (nuevoProducto) => {
    const nuevoHistorial = [...historiPurchase, nuevoProducto];
    setHistoriPurchase(nuevoHistorial);

    // Guardar el nuevo historial en localStorage
    localStorage.setItem("historiPurchase", JSON.stringify(nuevoHistorial));
  };

  return { historiPurchase, agregarProducto };
};
