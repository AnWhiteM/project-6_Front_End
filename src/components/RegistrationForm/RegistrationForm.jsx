import { Formik, Form, Field} from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from "./RegistrationForm.module.css"


export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
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
              <label>Enter your name</label>
              <Field type="name" name="name"/>

                <label>Enter your Email</label>
                <Field type="email" name="email"/>

                <label>Create a password</label>
                <Field type="password" name="password"/>

                <button type="submit">Register Now</button>
          </Form>
        </Formik>
    </div>
  );
};