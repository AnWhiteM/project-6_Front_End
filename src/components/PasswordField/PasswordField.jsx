import { useState } from "react";
import { Field } from "formik";
import css from "../PasswordField/PasswordField.module.css";
import svg from "../../img/icons.svg";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.passwordField}>
      <Field
        type={showPassword ? "text" : "password"}
        name="password"
        className={css.formInput}
        placeholder="Password"
      />
      <button
        className={css.eye}
        type="button"
        onClick={togglePasswordVisibility}
      >
        <svg width="18" height="18" stroke="currentColor">
          <use
            href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default PasswordField;
