import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => { // Fixed typo in component name
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {/* Fixed className syntax */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
