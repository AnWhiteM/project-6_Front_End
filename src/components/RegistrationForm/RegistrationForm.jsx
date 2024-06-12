import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
// import svg from "../../img/icons.svg";
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

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    toast.success("Ти зареєструвався");
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
        <Form className={css.form}>
          <label htmlFor="name" />
          <Field
            type="name"
            name="name"
            placeholder="Enter your name"
            className={css.input}
          />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label htmlFor="email" />
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
          <label htmlFor="password" />
          <div>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              className={css.input}
              placeholder="Create a password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
            <button
              type="button "
              className={css.eye}
              onClick={togglePasswordVisibility}
            >
              {/* <svg width="18" height="18" stroke="currentColor">
                        <use
                          href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
                        ></use>
                      </svg> */}
            </button>
          </div>

          <button type="submit" className={css.button}>
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};
