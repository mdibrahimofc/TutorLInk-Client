import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => { // Fixed typo in component name
  return (
    <div className="dark:bg-gray-950">
      <NavBar />
      <div className="min-h-screen w-full flex flex-col">
      {/* Fixed className syntax */}
      <div className="flex-grow w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default MainLayout;
