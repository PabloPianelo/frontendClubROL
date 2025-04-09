import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
//cambiar el nameKey 
const PrivateRoute = ({  children }) => {
  const navigate = useNavigate(); // este hook nos permite redireccionar al usuario donde queramos

  const data = localStorage.getItem("user");
  console.log(data); // recogemos de localStorage el elemento con el key = nameKey
  const parsedJson = data ? JSON.parse(data) : null; // como guardamos en localStorage las cosas
  // como string debemos parsear para recuperar JSON object
  useEffect(() => {
    if (parsedJson === null) {
      navigate("/ErrorBiblioteca", { replace: true }); // si el JSON no existe mandamos al usuario al principio.
    }
  }, [ parsedJson]);

  return parsedJson !== null && children; // si es diferente de null le devolvemos el componente hijo.
};

export default PrivateRoute;
