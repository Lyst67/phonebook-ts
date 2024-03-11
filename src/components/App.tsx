import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { AddForm } from "./AddForm/AddForm";
import { refreshThunk } from "../app/auth/auth-operations";
import { selectIsRefreshing } from "../app/auth/auth-selectors";
import { Loader } from "./Loader/Loader";
import { UpdateForm } from "./UpdateForm/UpdateForm";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./PrivatRoute";
import { PublicRoute } from "./PublicRoute";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const HomePage = lazy(() => import("../pages/Home/Home"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const LogInForm = lazy(() => import("../pages/LogInForm/LogInForm"));
const RegisterForm = lazy(() => import("../pages/RegisterForm/RegisterForm"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          >
            <Route path="add" element={<AddForm />} />
            <Route path="update" element={<UpdateForm />} />
          </Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInForm />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
