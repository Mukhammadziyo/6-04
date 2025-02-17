import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img className="w-full h-screen" src="public/404 not found.jpg" alt="" />
      <NavLink
        to={"/"}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Bosh Sahifaga qaytish
      </NavLink>
    </div>
  );
}
