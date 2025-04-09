//routes/Root.jsx //corresponede al layaut donde añadiremos los componentes
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";

export const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
       <Footer/> 
    </>
  );
};
