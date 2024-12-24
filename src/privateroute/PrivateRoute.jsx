import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(loading);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
