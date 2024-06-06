import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../UserEditModal/UserEditModal.module.css";
import PasswordField from "../PasswordField/PasswordField";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function UserEditModal({ onClose }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <>
      <div className={css.backdrop} onClick={() => onClose()}>
        <div className={css.container} onClick={(e) => handleMenuClick(e)}>
          <div className={css.wrap}>
            <button className={css.closeBtn} onClick={() => onClose()}>
              <svg width="18" height="18" stroke="currentColor">
                <use href="/src/img/icons.svg#icon-x-close"></use>
              </svg>
            </button>
          </div>
          <p>Edit Profile</p>
          <div className={css.avatarContainer}>
            <span className={`${css.avatarBig} ${css.avatar}`} />
            {/* <img src="/src/img/user.jpg" alt="avatar" width="68" height="68"></img> */}
            {/* <input type="file" id="upload" accept="image/*" /> */}

            <button className={css.plusBtn}>
              <svg width="10" height="10" stroke="currentColor">
                <use href="/src/img/icons.svg#icon-plus"></use>
              </svg>
            </button>
          </div>
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
              <Form className={css.forma} autoComplete="off">
                <div className={css.formGroup}>
                  <label htmlFor="name" className={css.formLabel} />
                  <Field
                    type="text"
                    name="name"
                    className={css.formInput}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="email" className={css.formLabel} />
                  <Field
                    type="text"
                    name="email"
                    className={css.formInput}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="password" className={css.formLabel} />

                  <PasswordField />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.error}
                  />
                </div>

                <button type="submit" className={css.btn}>
                  Send
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
