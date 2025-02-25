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
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial/UpdateTutorial";
import AboutUs from "../pages/AboutUs/AboutUs";
import FAQ from "../pages/FAQ/FAQ";

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
          path: "find-tutors/:category",
          element: <FindTutors/>
        },
        {
          path: "about",
          element: <AboutUs/>
        },
        {
          path: "faq",
          element: <FAQ/>,
        },
        {
          path: "tutor/:details",
          element: <PrivateRoute><TutorDetails/></PrivateRoute>
        },
        {
          path: "mybookedtutor",
          element: <PrivateRoute><MyBookedTutors/></PrivateRoute>
        },
        {
          path: "mytutorials",
          element: <PrivateRoute><MyTutorials/></PrivateRoute>
        },
        {
          path: "update/:id",
          element: <UpdateTutorial/>
        }
      ]
    },
  ]);

export default router;