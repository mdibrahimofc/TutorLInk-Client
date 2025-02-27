import React, { useContext, useState, useEffect } from "react";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const NavBar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "true") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const darkModeHandler = () => {
    const newMode = !dark;
    setDark(newMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", newMode);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDisplayName = () => setIsNameVisible(!isNameVisible);

  return (
    <div className="w-full sticky top-0 z-50 py-2 bg-white dark:bg-gray-900">
      <nav className="bg-base-100 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <NavLink to="/" className="text-xl font-bold">
              TutorLink
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
            >
              Home
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/addTutorials"
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Add Tutorials
                </NavLink>
                <NavLink
                  to="/find-tutors/all"
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Find Tutors
                </NavLink>
                <NavLink
                  to="/mybookedtutor"
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
                >
                  My Booked Tutor
                </NavLink>
                <NavLink
                  to="/mytutorials"
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
                >
                  My Tutorials
                </NavLink>
              </>
            )}
            <NavLink
              to="/about"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
            >
              FAQ
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden btn btn-ghost btn-circle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={darkModeHandler}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="btn btn-ghost btn-circle"
            >
              {dark ? <IoSunny className="text-yellow-500" /> : <IoMoon />}
            </button>

            {/* User Profile */}
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="avatar">
                    <div
                      className="w-10 rounded-full cursor-pointer"
                      onClick={toggleDisplayName}
                    >
                      <img
                        alt="User avatar"
                        src={
                          user.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  {/* Display Name (Dropdown Style) */}
                  {isNameVisible && (
                    <div className="absolute top-12 left-0 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow-md">
                      {user.displayName || "User"}
                    </div>
                  )}
                </div>
                {/* Log Out Button */}
                <button
                  onClick={logout}
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Log out
                </button>
              </div>
            ) : (
              <NavLink
                to="/signin"
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                Log in
              </NavLink>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-base-100 dark:bg-gray-900 py-4 px-4 space-y-2">
            <NavLink
              to="/"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/faq"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
              onClick={toggleMenu}
            >
              FAQ
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
