import { Formik, Form, Field} from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from "./LoginForm.module.css"

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
                <label>Enter your Email</label>
                <Field type="email" name="email"/>

                <label>Confirm a password</label>
                <Field type="password" name="password"/>

                <button type="submit">Log In Now</button>
          </Form>
        </Formik>
    </div>
  );
}
