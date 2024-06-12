import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, getUserInfo } from "../../redux/auth/operations";
import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from "../../redux/auth/selectror";

import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      {isRefreshing ? (
        <b>Loading...</b>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/welcome" element={<LoginPage />} />
            <Route
              path="/auth/register"
              element={
                <RestrictedRoute component={<Register />} redirectTo="/home" />
              }
            />
            <Route
              path="/auth/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/home" />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute
                  component={<HomePage />}
                  redirectTo="/auth/login"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster position="top-right" />
        </Suspense>
      )}
    </>
  );
};
