import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.cont}>
      <div className={css.box}>
        <div className={css.nav}>
          <ul className={css.navList}>
            <li>
              <NavLink to="/auth/register"> Registration </NavLink>
            </li>
            <li>
              <NavLink to="/auth/login" className={css.active}>
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
