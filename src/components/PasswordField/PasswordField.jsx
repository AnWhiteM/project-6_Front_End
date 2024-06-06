import { useState } from "react";
import { Field } from "formik";
import css from "../PasswordField/PasswordField.module.css";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  console.log(
    `/src/img/icons${showPassword ? ".svg#eye-slash-icon" : ".svg#eye-icon"}`
  );
  return (
    <div className={css.passwordField}>
      <Field
        type={showPassword ? "text" : "password"}
        name="password"
        className={css.formInput}
        placeholder="Password"
      />
      <button className={css.eye} onClick={togglePasswordVisibility}>
        <svg width="18" height="18" stroke="currentColor">
          <use
            href={`/src/img/icons${
              showPassword ? ".svg#eye-slash-icon" : ".svg#eye-icon"
            }`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default PasswordField;

// href={`/src/img/sprite ${
//             showPassword ? "(1).svg#eye-slash-icon" : "(1).svg#eye-icon"
//           }`}
