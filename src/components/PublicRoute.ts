import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogedIn } from "../app/auth/auth-selectors";

type publicRouteProps = {
  children: React.ReactNode;
}

export const PublicRoute = ({ children }: publicRouteProps) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return !isLogedIn
    ? children
    : React.createElement(Navigate, { to: "/contacts" });
};
