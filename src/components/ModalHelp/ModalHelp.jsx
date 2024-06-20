import Modal from "react-modal";
import svg from "../../img/icons.svg";
import css from "./ModalHelp.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { sendHelpMessage } from "../../redux/boards/operations";

export default function ModalHelp({ isOpen, closeModal }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const ValidEditionSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    comment: Yup.string()
      .min(4, "Too Short Comment!")
      .max(300, "Too Long Comment!")
      .required("Required"),
  });
  const Notify = () =>
    toast.success(
      "Thanks for contacting us! We've received your message and will get back to you soon"
    );

  const handleSubmit = (values, actions) => {
    const newMessage = {
      email: values.email,
      comment: values.comment,
    };
    actions.resetForm();
    dispatch(sendHelpMessage(newMessage));
    Notify();
    closeModal();
  };
  return (
    <Modal
      overlayClassName={css.overlay}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Help Modal"
    >
      <h2 className={css.title}>Need help</h2>
      <svg className={css.icon} onClick={closeModal} width="18px" height="18px">
        <use href={svg + "#x-close"}></use>
      </svg>
      <Formik
        initialValues={{ email: user.email, comment: "" }}
        onSubmit={handleSubmit}
        validationSchema={ValidEditionSchema}
      >
        {({ touched, errors }) => (
          <Form autoComplete="off">
            <div className={css.formGroup}>
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                className={`${css.input} ${
                  errors.email && touched.email ? css.inputError : ""
                }`}
              />
            </div>

            <div className={css.formGroup}>
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={css.error}
                />
              </div>
              <Field
                className={`${css.textArea} ${
                  errors.comment && touched.comment ? css.textAreaError : ""
                }`}
                type="text"
                name="comment"
                placeholder="Comment"
                rows="5"
                component="textarea"
              />
            </div>

            <button className={css.button} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
