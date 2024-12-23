import React, { useContext, useState, useEffect } from "react";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const NavBar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const [isNameVisible, setIsNameVisible] = useState(false);

  const toggleDisplayName = () => {
    setIsNameVisible(!isNameVisible);
  };
  console.log(user?.photoURL);

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

  return (
    <nav className="bg-base-100 sticky top-0 z-50 dark:bg-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
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
          <NavLink
            to="/addTutorials"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
          >
            Add Tutorials
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
          >
            Contact
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
              <div>
                <div className="avatar">
                  <div
                    className="w-10 rounded-full"
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
                {/* Display Name */}
                {isNameVisible && (
                  <p className="text-sm font-medium">
                    {user.displayName || "User"}
                  </p>
                )}
                {/* Log Out Button */}
              </div>
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
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
