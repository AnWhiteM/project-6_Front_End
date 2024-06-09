import { Formik, Form, Field} from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';


export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
            <Form>
                <label>Enter your Email</label>
                <Field type="email" name="email"/>

                <label>Create a password</label>
                <Field type="password" name="password"/>

                <button type="submit">Log In Now</button>
          </Form>
        </Formik>
    </div>
  );
}
