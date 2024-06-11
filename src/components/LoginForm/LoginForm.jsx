import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { selectError } from "../../redux/auth/selectror";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector(selectError);
  const [submittedWithError, setSubmittedWithError] = useState(false);

  // const handleSubmit = async (values, actions) => {
  //   try {
  //     await dispatch(logIn(values));
  //     navigate("/home")
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  //   actions.resetForm();
  // };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    navigate("/home");
    actions.resetForm();
  };
  useEffect(() => {
    if (error && submittedWithError) {
      toast.error(`Ops, somthing wrong, Try Again!`);
    }
  }, [error, submittedWithError]);

  const handleFormSubmit = (values, actions) => {
    setSubmittedWithError(true);
    handleSubmit(values, actions);
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleFormSubmit}
      >
        <Form className={css.form}>
          <label>Enter your Email</label>
          <Field type="email" name="email" />

          <label>Confirm a password</label>
          <Field type="password" name="password" />

          <button type="submit">Log In Now</button>
        </Form>
      </Formik>
    </div>
  );
}
