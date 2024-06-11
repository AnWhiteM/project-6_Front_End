import { Formik, Form, Field} from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from "./RegistrationForm.module.css"
import svg from "../../img/icons.svg";
import { useState } from 'react';




export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
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
        name: '', 
        email: '', 
        password: '', 
      }}
      onSubmit={handleSubmit}
      >
            <Form className={css.form}>
              <label htmlFor="name"/>
              <Field type="name" name="name" placeholder ="Enter your name" className={css.input}/>
              <label htmlFor="email"/>
                <Field type="email" name="email" placeholder ="Enter your email" className={css.input}/>
                <label htmlFor="password"/>
                  <div>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={css.input}
                      placeholder="Create a password"
                    />
                    <button type="button "className={css.eye} onClick={togglePasswordVisibility}>
                      {/* <svg width="18" height="18" stroke="currentColor">
                        <use
                          href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
                        ></use>
                      </svg> */}
                    </button>
                </div>

                <button type="submit" className={css.button}>Register Now</button>
          </Form>
        </Formik>
    </div>
  );
};