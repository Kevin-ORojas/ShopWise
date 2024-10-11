import FactCheckIcon from "@mui/icons-material/FactCheck";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useProducts } from "../../hook/useProducts";

export const ProductList = ({ products, removeProduct, incrementQuanity }) => {
  return (
    <div className="font-roboto">
      {products.length === 0 ? (
        <h2 className="text-2xl font-bold font-roboto text-slate-900 text-center my-4">
          No hay productos registrados.
        </h2>
      ) : (
        products.map(({ id, nombre, precio, cantidad }) => (
          <div
            className="sm:flex sm:w-full border p-4 flex justify-around items-center bg-gray-100"
            key={id}
          >
            <h2>
              {nombre}{" "}
              <AddCircleOutlineIcon
                className="cursor-pointer"
                onClick={() => incrementQuanity(id)}
              />
            </h2>
            <p>cantidad: {cantidad} </p>
            <p>${(precio * cantidad).toFixed(2)}</p>
            <div className="ml-8 gap-4">
              <FactCheckIcon className="blue text-sm" />
              <ClearIcon
                className="hover: text-red-300 cursor-pointer text-sm"
                onClick={() => removeProduct(id)}
              />
              <EditIcon className="green text-sm" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
