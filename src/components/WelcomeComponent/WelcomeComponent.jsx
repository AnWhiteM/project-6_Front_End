import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const WelcomeComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <svg width="20" height="20">
        <use href="../../img/icons.svg#icon-logo"></use>
      </svg>
      <h1>Welcome</h1>
      <svg  width="20" height="20">
              <use
                href="./images/icons.svg#icon-login"
              ></use>
              </svg>
      <button onClick={handleToggle}>
        {isLogin ? "Switch to Registration" : "Switch to Login"}
      </button>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};
