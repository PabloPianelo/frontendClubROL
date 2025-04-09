//routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import Home from "../pages/homePage";
import TOE from "../pages/TOEPage";
import Info from "../pages/infoPage";
import Login from "../pages/logins/loginPage";
import Reguister from "../pages/logins/reguisterPage";
import Biblioteca from "../pages/bibliotecaPage";
import ProtectedRoute from "../component/ProtectedRoute";
import ErrorBibliotecaPage from "../pages/errorBibiotecaPage";


// import ErrorPage400 from "../pages/error404";
// import ErrorPage500 from "../pages/error500";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/TOE",
          element: <TOE />,
        },
         {
          path: "/unete",
          element: <Info />,
        },{
          path: "/login",
          element: <Login />,

        },{
          path: "/reguister",
          element: <Reguister />,
        }, {
          path: "/biblioteca",
          element: (
            <ProtectedRoute>
              <Biblioteca />
            </ProtectedRoute>
          ),
          },
        
        {
          path: "/ErrorBiblioteca",
          element: <ErrorBibliotecaPage />,
        },
        // {
        //   path: "/error500",
        //   element: <ErrorPage500 />,
        // }
      ],
    },
  ]);

export default router