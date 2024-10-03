import { ProductForm } from "./components/ProductForm/ProductForm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const App = () => {
  return (
    <div>
      <AcUnitIcon sx={{ color: "blue", fontSize: "40px" }} />
      <ProductForm />
    </div>
  );
};
