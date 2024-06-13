import svg from "../../img/icons.svg";
import { NavLink } from "react-router-dom";
import css from "./LoginPage.module.css";
import { useLocation } from "react-router-dom";
// import Register from "../Register/Register";
// import Login from "../Login/Login";

export default function LoginPage() {
  const location = useLocation();
  const isRegistering = location.pathname === "/auth/register";
  const isLoggingIn = location.pathname === "/auth/login";

  return (
    <div className={css.box}>
      {!(isRegistering || isLoggingIn) && (
        <>
          <picture>
            <source
              srcSet={`
               https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/p6ex38slxwvcjwcwnbxj.png  124w,
               https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/ixq02fsx2ekcu2qu7nb0.png 248w`}
              sizes="(min-width: 1440px) 124px, (min-width: 1280px) 124px, (min-width: 768px) 124px, (min-width: 320px) 124px"
            />
            <img
              src="https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/ixq02fsx2ekcu2qu7nb0.png"
              alt="man after the laptop"
            />
          </picture>

          <div className={css.title}>
            <svg width="48" height="48">
              <use href={svg + "#icon-logo"}></use>
            </svg>
            <h1 className={css.titlename}>Task Pro</h1>
          </div>
          <p className={css.quote}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Dont wait, start achieving your goals now!
          </p>
          <NavLink to="/auth/register">
            <button className={css.buttonreg}>Registration</button>
          </NavLink>
          <NavLink to="/auth/login">
            <button className={css.buttonlog}>Log In</button>
          </NavLink>
        </>
      )}
      {/* <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}
