import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form className="flex justify-center items-center min-h-screen flex-col">
      <div className="border">
        <div>
          <input type="text" placeholder="Usuario" />
        </div>{" "}
        <div>
          <input type="password" placeholder="Contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p>
          ¿No tienes cuenta? <Link to={"/register"}>Registrate</Link>
        </p>
      </div>
    </form>
  );
};
