import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import keycloak from "../keycloak";

const ProtectedRoute = () => {
  return keycloak.authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
