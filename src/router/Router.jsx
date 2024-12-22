import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../layout/Home";
import MainLayoute from "../layout/MainLayoute";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayoute/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "signup",
          element: <SignUp/>
        },
        {
          path: "signin",
          element: <SignIn/>
        }
      ]
    },
  ]);

export default router;