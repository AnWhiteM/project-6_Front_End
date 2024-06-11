import { Formik, Form, Field} from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from "./LoginForm.module.css"
import svg from "../../img/icons.svg";
import { useState } from 'react';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values));
      navigate("/home")
    } catch (error) {
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
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
            <Form className={css.form}>
              <label htmlFor="email"/>
                <Field type="email" name="email" placeholder ="Enter your email" className={css.input}/>
                <label htmlFor="password"/>
                  <div>
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={css.input}
                      placeholder="Confirm a password"
                    />
                    <button type="button "className={css.eye} onClick={togglePasswordVisibility}>
                      {/* <svg width="18" height="18" stroke="currentColor">
                        <use
                          href={`${svg}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
                        ></use>
                      </svg> */}
                    </button>
                </div>

                <button type="submit" className={css.button}>Log in Now</button>
          </Form>
        </Formik>
    </div>
  );
}
