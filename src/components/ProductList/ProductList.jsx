import FactCheckIcon from "@mui/icons-material/FactCheck";
export const ProductList = ({ products }) => {
  return (
    <div className="xl:flex xl:gap-36">
      {products.map(({ nombre, precio }) => (
        <div
          className="sm:flex sm:w-full border p-4 flex justify-around items-center bg-gray-100 "
          key={products.id}
        >
          <h2>{nombre}</h2>
          <p>${precio}</p>
          <FactCheckIcon sx={{ color: "blue", fontSize: "40px" }} />
        </div>
      ))}
    </div>
  );
};
