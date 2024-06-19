import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { MainDashboard } from "../MainDashboard/MainDashboard";

import { setTheme } from "../../redux/theme/slice";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    if (theme) {
      document.body.className = `${theme}-theme`;
    }
  }, [theme]);

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
            >
              <Route path="/home/:deskId" element={<MainDashboard />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster position="top-center" />
        </Suspense>
      )}
    </>
  );
};
