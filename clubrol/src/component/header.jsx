import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar'
import StorageCRUD from "../context/LocalStorage";


const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(StorageCRUD.get("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload(); // Recargamos la página para actualizar el estado
  };
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center gap-4">
  {user ? (
    <>
      <span>Bienvenido, {user.name}!</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Iniciar Sesión
      </button>
      <button
        onClick={() => navigate("/reguister")}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Registrarse
      </button>
    </>
  )}
</div>

    </header>
  );

};

export default Header