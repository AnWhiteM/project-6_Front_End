import Modal from "react-modal";
// import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ModalHelp({ isOpen, closeModal }) {
  //   const ValidEditionSchema = Yup.object().shape({
  //     name: Yup.string()
  //       .min(1, "Too Short Name!")
  //       .max(35, "Too Long Name!")
  //       .required("Required"),
  //     number: Yup.string()
  //       .min(1, "Too Short Number!")
  //       .max(20, "Too Long Number!")
  //       .required("Required"),
  //   });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      //   portalClassName={css.portal}
      //   overlayClassName={css.overlay}
      //   className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <Formik
        initialValues={{}}
        // onSubmit={handleSubmit}
        // validationSchema={ValidEditionSchema}
      >
        <Form autoComplete="off">
          <p>Need help</p>
          <svg fill="blek">
            <use href="../../img/icons.svg/icon-x-close" />
          </svg>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
          <button type="submit">Send </button>
        </Form>
      </Formik>
    </Modal>
  );
}
