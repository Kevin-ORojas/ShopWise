import React from "react";

export const Register = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Usuario</label>
        <input type="text" placeholder="username" name="username" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="email" name="email" />
      </div>

      <div>
        <label htmlFor="contraseña">Usuario</label>
        <input type="text" placeholder="contraseña" name="password" />
      </div>
    </form>
  );
};
