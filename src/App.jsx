import { Nav } from "./components/Navbar/Nav";
import { ProductForm } from "./components/ProductForm/ProductForm";
import { Home } from "./components/Home/Home";
import { Login } from "./auth/login/Login";
import { Register } from "./auth/register/Register";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/products" element={<ProductForm />} />
      </Routes>
    </div>
  );
};
