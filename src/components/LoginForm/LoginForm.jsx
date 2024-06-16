import { Formik, Form, Field, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import css from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { selectError } from "../../redux/auth/selectors";
import * as Yup from "yup";
import svg from "../../img/icons.svg";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(64, "Too long")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [submittedWithError, setSubmittedWithError] = useState(false);

  const handleSubmit = async (values, actions) => {
    setSubmittedWithError(false);
    try {
      await dispatch(logIn(values))
        .unwrap()
        .then((data) => {
          toast.success(`Welcome, ${data.user.name}`, {
            duration: 6000,
          });
        });
    } catch (error) {
      toast.error("Email or password wrong");
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
        validationSchema={ValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formContainer}>
              <label htmlFor="email" />
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`${css.input} ${
                  errors.email && touched.email ? css.inputError : ""
                }`}
              />
            </div>

            <div className={css.formContainer}>
              <label htmlFor="password" />
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>

              <div>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`${css.input} ${
                    errors.password && touched.password ? css.inputError : ""
                  }`}
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="button"
                className={css.eye}
                onClick={togglePasswordVisibility}
              >
                <svg width="18" height="18" stroke="currentColor">
                  <use
                    href={`${svg}${
                      showPassword ? "#eye-slash-icon" : "#eye-icon"
                    }`}
                  ></use>
                </svg>
              </button>
            </div>
            <button type="submit" className={css.button}>
              Log in Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
