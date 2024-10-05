import { useState } from "react";
import { ProductList } from "../ProductList/ProductList";
import { useProducts } from "../../hook/useProducts";

export const ProductForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { products, addProduct, sumPrices } = useProducts();
  const [precio, setPrecio] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(inputValue, precio);
    setInputValue("");
    setPrecio(0);
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handlePriceChange = ({ target }) => {
    setPrecio(Number(target.value));
  };

  const handleSumaPrice = () => {
    return products.reduce((acc, curr) => acc + curr.precio, 0);
  };
  return (
    <div className="mt-4">
      <form
        className="flex justify-around border h-12 bg-slate-200 rounded-md "
        onSubmit={handleSubmit}
      >
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
          className="border bg-sky-500 px-2 rounded-md hover:bg-sky-300 transition-colors duration-300 cursor-pointer text-sm"
          type="submit"
        >
          Agregar Producto
        </button>
      </form>

      <ProductList products={products} />
      <h2 className="text-2xl font-bold text-slate-900">
        Total: ${handleSumaPrice()}
      </h2>
    </div>
  );
};
