import { Nav } from "./components/Navbar/Nav";
import { ProductForm } from "./components/ProductForm/ProductForm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { ProductList } from "./components/ProductList/ProductList";
import { useProducts } from "./hook/useProducts";

export const App = () => {
  return (
    <div>
      <Nav />
      <ProductForm />
    </div>
  );
};
