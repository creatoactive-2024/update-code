import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedDriverRoute: React.FC = () => {
  // 🔹 Get user from localStorage (or your auth context)
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  // 🔹 Check for driver role and token
  const isDriver = user && user.role === "driver" && token;

  // 🔹 If not driver or no token → redirect to driver sign-in page
  if (!isDriver) {
    return <Navigate to="/driver/signin" replace />;
  }

  // 🔹 Otherwise allow access to nested driver routes
  return <Outlet />;
};

export default ProtectedDriverRoute;

