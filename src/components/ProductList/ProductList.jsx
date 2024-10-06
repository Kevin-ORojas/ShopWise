import FactCheckIcon from "@mui/icons-material/FactCheck";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

export const ProductList = ({ products, removeProduct }) => {
  return (
    <div className="font-roboto">
      {products.map(({ id, nombre, precio }) => (
        <div
          className="sm:flex sm:w-full border p-4 flex justify-around items-center bg-gray-100"
          key={id}
        >
          <h2>{nombre}</h2>
          <p>${precio}</p>
          <div className="ml-8 gap-4">
            <FactCheckIcon className="blue text-sm" />
            <ClearIcon
              className="red text-sm cursor-pointer"
              onClick={() => removeProduct(id)}
            />
            <EditIcon className="green text-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};
