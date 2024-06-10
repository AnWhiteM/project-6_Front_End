import svg from "../../img/icons.svg";
import { NavLink } from 'react-router-dom';
import css from "./LoginPage.module.css"
import { Route, Routes, useLocation  } from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";

export const LoginPage = () => {
  const location = useLocation();
  const isRegistering = location.pathname === '/auth/register';
  const isLoggingIn = location.pathname === '/auth/login';


  return (
    <div className={css.box}>
      {!(isRegistering || isLoggingIn) && (
        <>
      <picture>
          <source
            srcSet={`
               /img/1x-mob-man.png   54w,
               /img/2x-mob-man.png 108w`}
            sizes="(min-width: 1440px) 54px, (min-width: 1280px) 54px, (min-width: 768px) 54px, (min-width: 320px) 54px"
          />
          <img
            src="/img/1x-mob-man.png"
            alt="Kaktus"
          />
        </picture>

      <div className={css.title}>
      <svg width="48" height="48">
        <use href={svg + "#icon-logo"}></use>
      </svg>
      <h1 className={css.titlename}>Task Pro</h1>
      </div>
      <p className={css.quote}>Supercharge your productivity and take control of your tasks with Task Pro - Dont wait, start achieving your goals now!</p>
      <NavLink to = "/auth/register">
        <button className={css.buttonreg}>Registration</button>
      </NavLink>
      <NavLink to = "/auth/login">
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
};
