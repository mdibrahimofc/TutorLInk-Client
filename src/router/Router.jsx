import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../layout/Home";
import MainLayoute from "../layout/MainLayoute";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import PrivateRoute from "../privateroute/PrivateRoute";
import Error from "../pages/Error";
import FindTutors from "../layout/FindTutors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayoute/>,
      errorElement: <Error/>,
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
          element: <PrivateRoute><AddTutorials/></PrivateRoute>
        },
        {
          path: "find-tutors",
          element: <FindTutors/>
        }
      ]
    },
  ]);

export default router;