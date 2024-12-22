import React, { useContext, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const NavBar = () => {
  const [dark, setDark] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="navbar justify-between bg-base-100 dark:bg-gray-900 dark:text-white">
      <div>
        <a className="btn btn-ghost text-xl">TutorLink</a>
      </div>
      <div>
        <NavLink
          to="/"
          className="p-2 hover:bg-gray-200 dark:text-gray-50 rounded-full"
        >
          Home
        </NavLink>
      </div>
      <div className="flex-none flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={darkModeHandler}
          aria-label="Toggle Dark Mode"
          aria-pressed={dark}
          className="btn btn-ghost btn-circle"
        >
          {dark ? <IoSunny className="text-yellow-500" /> : <IoMoon />}
        </button>

        {/* User Profile */}
        <div className="dropdown dropdown-end">
          {user ? (
            <div className="flex items-center relative group">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={user ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              {/* Show Username on Hover */}
              <span className="absolute top-full mt-2 hidden group-hover:block bg-gray-100 dark:bg-gray-800 text-sm rounded px-2 py-1 shadow">
                {user.displayName || "User"}
              </span>
              <div>
              <button onClick={logout} className="p-2 hover:bg-gray-200 dark:text-gray-50 rounded-full"> Log out</button>
            </div>
            </div>
          ) : (
            <div>
              <NavLink
                to="/signin"
                className="p-2 hover:bg-gray-200 dark:text-gray-50 rounded-full"
              >
                Log in
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
