import {  } from 'react'
import { useNavigate } from 'react-router-dom';



function Reguister() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
          <form>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
            />
            <input
              type="email"
              placeholder="Correo electronico"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded" onClick={() => navigate("/")}>
              Registrarme
            </button>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Reguister
