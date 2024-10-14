import { Nav } from "./components/Navbar/Nav";
import { ProductForm } from "./components/ProductForm/ProductForm";
import { Home } from "./components/Home/Home";
import { Login } from "./auth/login/Login";
import { Register } from "./auth/register/Register";
import { Route, Routes } from "react-router-dom";
import { HistoriPurchase } from "./components/HistoriPurchase/HistoriPurchase";
import { usePurchaseHistory } from "./hook/usePurchaseHistory";

export const App = () => {
  const { historiPurchase } = usePurchaseHistory();
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductForm />} />

        <Route
          path="/historial"
          element={<HistoriPurchase historial={historiPurchase} />}
        />
      </Routes>
    </div>
  );
};
