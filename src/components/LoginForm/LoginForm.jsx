// import { Formik, Form, Field } from "formik";
// import { logIn } from "../../redux/auth/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import css from "./LoginForm.module.css";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { selectError } from "../../redux/auth/selectror";

// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const error = useSelector(selectError);
//   const [submittedWithError, setSubmittedWithError] = useState(false);

//   // const handleSubmit = async (values, actions) => {
//   //   try {
//   //     await dispatch(logIn(values));
//   //     navigate("/home")
//   //   } catch (error) {
//   //     console.error("Login failed:", error);
//   //   }
//   //   actions.resetForm();
//   // };

//   const handleSubmit = (values, actions) => {
//     dispatch(logIn(values));
//     navigate("/home");
//     actions.resetForm();
//   };

//   useEffect(() => {
//     if (error && submittedWithError) {
//       toast.error(`Ops, somthing wrong, Try Again!`);
//     }
//   }, [error, submittedWithError]);

//   const handleFormSubmit = (values, actions) => {
//     setSubmittedWithError(true);
//     handleSubmit(values, actions);
//   };

//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = (event) => {
//     event.preventDefault();
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         onSubmit={handleFormSubmit}
//       >
//             <Form className={css.form}>
//               <label htmlFor="email"/>
//                 <Field type="email" name="email" placeholder ="Enter your email" className={css.input}/>
//                 <label htmlFor="password"/>
//                   <div>
//                     <Field
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       className={css.input}
//                       placeholder="Confirm a password"
//                     />
//                     <button type="button "className={css.eye} onClick={togglePasswordVisibility}>
//                       {/* <svg width="18" height="18" stroke="currentColor">
//                         <use
//                           href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
//                         ></use>
//                       </svg> */}
//                     </button>
//                 </div>

//                 <button type="submit" className={css.button}>Log in Now</button>
//           </Form>
//         </Formik>
//     </div>
//   );
// }

import { Formik, Form, Field, validateYupSchema, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
// import { selectError } from "../../redux/auth/selectror";
import { unwrapResult } from "@reduxjs/toolkit";
import * as Yup from "yup";


const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(64, "Too long")
    .required("Required"),
});


export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const error = useSelector(selectError);
  const [submittedWithError, setSubmittedWithError] = useState(false);

  const handleSubmit = async (values, actions) => {
    setSubmittedWithError(true);
    try {
      const resultAction = await dispatch(logIn(values));
      unwrapResult(resultAction);
      navigate("/home");
    } catch (error) {
      toast.error(`Ops, something went wrong, Try Again!`);
      console.error("Login failed:", error);
    }
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
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <label htmlFor="email" />
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.error}       
          />
          
          <label htmlFor="password" />
          <div>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
              <ErrorMessage
              name="password"
              component="span"
              className={css.error}       
            />
            
            <button
              type="button"
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
            Log in Now
          </button>
        </Form>
      </Formik>
    </div>
  );
}
