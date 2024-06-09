import svg from "../../img/icons.svg";
import { NavLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div>
      <img src="../../../public/img/1x-mob-man.png" alt="programmer" />
      <svg width="48" height="48">
        <use href={svg + "#icon-logo"}></use>
      </svg>
      <h1>Task Pro</h1>
      <p>Supercharge your productivity and take control of your tasks with Task Pro - Dont wait, start achieving your goals now!</p>
      <NavLink to = "/register">
        <button>Registration</button>
      </NavLink>
      <NavLink to = "/login">
        <button>Log In</button>
      </NavLink>
    </div>
  );
};
