import { useState } from "react";
import { ProductList } from "../ProductList/ProductList";
import { useProducts } from "../../hook/useProducts";

import { usePurchaseHistory } from "../../hook/usePurchaseHistory";

export const ProductForm = () => {
  // Aquí es donde se almacenan y gestionan los productos
  const [precio, setPrecio] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { products, addProduct, sumPrices, removeProduct, incrementQuanity } =
    useProducts();
  const { agregarProducto } = usePurchaseHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = { nombre: inputValue, precio }; // Crear un objeto producto
    addProduct(inputValue, precio);
    agregarProducto(nuevoProducto); // Agrega el producto al historial
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
    <div className="max-w-full mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          className="border p-2 ml-4 rounded-md hover:border-cyan-700 ease-linear transition-colors cursor-pointer"
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          placeholder="Product Name"
        />

        <input
          className="border p-2 ml-4 rounded-md hover:border-cyan-700 ease-linear transition-colors cursor-pointer"
          type="number"
          placeholder="Precio del Producto"
          onChange={handlePriceChange}
          value={precio}
        />
        <button
          className="border font-roboto font-semibold bg-sky-500 px-2 p-4 rounded-md hover:bg-sky-300 transition-colors duration-300 cursor-pointer text-sm"
          type="submit"
        >
          Agregar Producto
        </button>
      </form>

      {/* aqui estoy renderizando la lista. */}
      <div className="mt-8">
        <ProductList
          products={products}
          removeProduct={removeProduct}
          incrementQuanity={incrementQuanity}
        />
        <h2 className="text-2xl font-bold font-roboto text-slate-900 py-4">
          Total: ${sumPrices()}
        </h2>
      </div>

      <div>
        <h2>Ver tu historial de compras</h2>
      </div>
    </div>
  );
};
