import svg from "../../img/icons.svg";
import { NavLink } from 'react-router-dom';
import css from "./LoginPage.module.css"
import { Route, Routes, useLocation  } from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";

export const LoginPage = () => {
  const location = useLocation();
  const isRegistering = location.pathname === '/register';
  const isLoggingIn = location.pathname === '/login';


  return (
    <div className={css.box}>
      {!(isRegistering || isLoggingIn) && (
        <>
      <img src="../../../public/img/2x-deskTab-man.png" alt="programmer" />
      <div className={css.title}>
      <svg width="48" height="48">
        <use href={svg + "#icon-logo"}></use>
      </svg>
      <h1 className={css.titlename}>Task Pro</h1>
      </div>
      <p className={css.quote}>Supercharge your productivity and take control of your tasks with Task Pro - Dont wait, start achieving your goals now!</p>
      <NavLink to = "/register">
        <button className={css.buttonreg}>Registration</button>
      </NavLink>
      <NavLink to = "/login">
        <button className={css.buttonlog}>Log In</button>
      </NavLink>
      </>
      )}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};