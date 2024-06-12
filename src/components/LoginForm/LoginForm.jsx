import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import css from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { selectError } from "../../redux/auth/selectror";

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [submittedWithError, setSubmittedWithError] = useState(false);

  const handleSubmit = async (values, actions) => {
    setSubmittedWithError(false);
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Ops, something went wrong, Try Again!");
      setSubmittedWithError(true);
    }
    actions.resetForm();
  };

  useEffect(() => {
    if (error && submittedWithError) {
      toast.error("Ops, something went wrong, Try Again!");
    }
  }, [error, submittedWithError]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
            required
          />
          <label htmlFor="password">Password</label>
          <div>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              className={css.input}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className={css.eye}
              onClick={togglePasswordVisibility}
            >
              {/* <svg width="18" height="18" stroke="currentColor">
                <use href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}></use>
              </svg> */}
            </button>
          </div>
          <button type="submit" className={css.button}>
            Log in Now
          </button>
        </Form>
      </Formik>
    </div>
  );
}
