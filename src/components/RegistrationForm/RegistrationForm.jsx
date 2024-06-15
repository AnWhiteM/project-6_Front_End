import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(64, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(64, "Too long")
    .required("Required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    await dispatch(register(values)).unwrap();
    toast.success("Registered successfully");
    navigate("/home");
    actions.resetForm();
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
         {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.formContainer}>
          <label htmlFor="name" />
          <div className={css.errorContainer}>
          <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          
          <Field
            type="name"
            name="name"
            placeholder="Enter your name"
            className={`${css.input} ${
              errors.name && touched.name ? css.inputError : ""
            }`}
          />
          </div>
          
          <div className={css.formContainer}>
          <label htmlFor="email" />
          <div className={css.errorContainer}>
          <ErrorMessage name="email" component="span" className={css.error} />
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
          <ErrorMessage name="password" component="span" className={css.error} />
          </div>
          <div>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              className={`${css.input} ${
                errors.password && touched.password ? css.inputError : ""
              }`}
              placeholder="Create a password"
            />
            </div>
            <button
              type="button "
              className={css.eye}
              onClick={togglePasswordVisibility}
            >
             <svg width="18" height="18" stroke="currentColor">
                  <use href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}></use>
                </svg>
            </button>
          </div>

          <button type="submit" className={css.button}>
            Register Now
          </button>
        </Form>)}
      </Formik>
    </div>
  );
};
