import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogedIn } from "../app/auth/auth-selectors";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  return isLoggedIn
    ? children
    : React.createElement(Navigate, { to: "/login" });
};
