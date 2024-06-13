import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function RestrictedRoute({
  component: Component,
  redirectTo = "/",
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
