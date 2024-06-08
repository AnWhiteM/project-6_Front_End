import Modal from "react-modal";
import svg from "../../img/icons.svg";
import css from "./ModalHelp.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ModalHelp({ isOpen, closeModal }) {
  const ValidEditionSchema = Yup.object().shape({
    email: Yup.string()
      .min(1, "Too Short Email!")
      .max(35, "Too Long Email!")
      .required("Required"),
    text: Yup.string()
      .min(1, "Too Short Coment!")
      .max(300, "Too Long Coment!")
      .required("Required"),
  });
  const Notify = () => toast.success("ТІЛЬКИ БОГ ПОМОЖЕ =)");

  const handleSubmit = (values) => {
    console.log(values.email);
    console.log(values.text);
    Notify();
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Help Modal"
      portalClassName={css.portal}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <Formik
        initialValues={{ email: "", text: "" }}
        onSubmit={handleSubmit}
        validationSchema={ValidEditionSchema}
      >
        <Form autoComplete="off">
          <p className={css.title}>Need help</p>
          <svg
            className={css.icon}
            onClick={closeModal}
            width="18px"
            height="18px"
          >
            <use className={css.icon} href={svg + "#x-close"}></use>
          </svg>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email address "
          />
          <ErrorMessage
            name="email"
            component="div"
            className={css.errorMessage}
          />
          <Field
            className={css.inputText}
            type="text"
            name="text"
            placeholder="Comment"
            rows="5"
            component="textarea"
          />
          <ErrorMessage
            name="text"
            component="div"
            className={css.errorMessage}
          />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
