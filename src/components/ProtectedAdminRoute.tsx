import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute: React.FC = () => {
  // 🔹 Get user from localStorage (or your auth context)
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // 🔹 Check for admin role
  const isAdmin = user && (user.role === "admin" || user.isAdmin);

  // 🔹 If not admin → redirect to sign-in page
  if (!isAdmin) {
    return <Navigate to="admin/signin" replace />;
  }

  // 🔹 Otherwise allow access to nested admin routes
  return <Outlet />;
};

export default ProtectedAdminRoute;