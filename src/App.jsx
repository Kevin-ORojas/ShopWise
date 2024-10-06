import { Nav } from "./components/Navbar/Nav";
import { ProductForm } from "./components/ProductForm/ProductForm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { ProductList } from "./components/ProductList/ProductList";
import { useProducts } from "./hook/useProducts";

export const App = () => {
  const { products, addProduct, removeProduct, sumPrices } = useProducts();

  return (
    <div className="mt-4 font-roboto">
      <ProductForm addProduct={addProduct} />
    </div>
  );
};
