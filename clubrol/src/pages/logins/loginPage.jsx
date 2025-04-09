import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StorageCRUD from "../../context/LocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
   
    //cambiar el local estorage

    // Simulamos un usuario autenticado
    const fakeUser = { name: "Jugador1", email };
    
    // Guardamos en localStorage
    StorageCRUD.create("user", fakeUser);
   

    // Redirigir a la Home o a donde quiera el usuario
    navigate("/");
    window.location.reload(); // Recarga la página para actualizar el estado
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 mb-4 bg-gray-700 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-4 bg-gray-700 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
