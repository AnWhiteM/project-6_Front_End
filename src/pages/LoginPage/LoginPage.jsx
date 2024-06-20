import svg from "../../img/icons.svg";
import { NavLink } from "react-router-dom";
import css from "./LoginPage.module.css";
import { useLocation } from "react-router-dom";

export default function LoginPage() {
  const location = useLocation();
  const isRegistering = location.pathname === "/auth/register";
  const isLoggingIn = location.pathname === "/auth/login";

  return (
    <div className={css.box}>
      {!(isRegistering || isLoggingIn) && (
        <>

        <img 
        className={css.img}
        srcSet="https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/p6ex38slxwvcjwcwnbxj.png 1x, https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/ixq02fsx2ekcu2qu7nb0.png 2x" 
        src="https://res.cloudinary.com/dqwyuuuzd/image/upload/v1718235452/ixq02fsx2ekcu2qu7nb0.png"
        alt="man after the laptop" 
        
        
        
        />

          <div className={css.title}>
            <div className={css.logoBox}>
            <svg className={css.logoLight}>
              <use href={svg + "#icon-logo"}></use>
            </svg>
            </div>
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
    </div>
  );
}
