import { useState } from "react";
import { ProductList } from "../ProductList/ProductList";

export const ProductForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [precio, setPrecio] = useState(0);
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1 || precio <= 0) return;

    const nuevoProducto = { nombre: inputValue, precio: precio };
    setProducts([...products, nuevoProducto]); // Agrego el nuevo producto al array de productos

    setInputValue("");
    setPrecio(0);
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handlePriceChange = ({ target }) => {
    setPrecio(Number(target.value));
  };
  return (
    <div className="mt-4">
      <form className="flex justify-around" onSubmit={handleSubmit}>
        <input
          className="border"
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          placeholder="Product Name"
        />

        <input
          className="border"
          type="number"
          placeholder="Precio del Producto"
          onChange={handlePriceChange}
          value={precio}
        />
        <button type="submit">Agregar Producto</button>
      </form>

      <ProductList products={products} />
    </div>
  );
};
