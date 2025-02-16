import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => { // Fixed typo in component name
  return (
    <div className="dark:bg-gray-950">
      <NavBar />
      <div className="min-h-screen flex flex-col max-w-[1530px] mx-auto">
      {/* Fixed className syntax */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default MainLayout;
