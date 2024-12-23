import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../layout/Home";
import MainLayoute from "../layout/MainLayoute";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AddTutorials from "../pages/AddTutorials/AddTutorials";

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
        },
        {
          path: "addTutorials",
          element: <AddTutorials/>
        }
      ]
    },
  ]);

export default router;