import Modal from "react-modal";
import css from "./CreateColumnModal.module.css";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import svg from "../../img/icons.svg";
import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/columns/operations";

Modal.setAppElement("#root");

export const CreateColumn = ({ isOpen, isClose, board }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newColumn = {
      title: values.title,
    };

    actions.resetForm();
    dispatch(
      addColumn({
        newColumn,
        board,
      })
    );
    isClose();
  };

  const columnModalValidation = Yup.object().shape({
    title: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required!"),
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => isClose()}
        className={css.createColumnModal}
        overlayClassName={css.createColumnModalOverlay}
      >
        <button
          className={css.createColumnModalCloseBtn}
          type="button"
          onClick={isClose}
        >
          <svg className={css.createColumnModalIcon} width="18px" height="18px">
            <use href={svg + "#x-close"}></use>
          </svg>
        </button>
        <div className={css.createColumnModalContainer}>
          <h1 className={css.createColumnModalText}>Add column</h1>
          <Formik
            initialValues={{ title: "" }}
            validationSchema={columnModalValidation}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
            <Form autoComplete="off" className={css.createColumnModalForm}>
              <div className={css.errorContainer}>
            <ErrorMessage
                className={css.error}
                component="span"
                name="title"
              />
              </div>
              <Field
                type="text"
                name="title"
                className={`${css.createColumnModalInput} ${
                  errors.title && touched.title ? css.inputError : ""
                }`}
                placeholder="Title"
                required
              />
              <button type="submit" className={css.createColumnModalSubmit}>
                <span className={css.createColumnModalSpan}>
                  <svg
                    className={css.createColumnModalAddIconPlus}
                    width="14px"
                    height="14px"
                  >
                    <use href={svg + "#icon-plus"}></use>
                  </svg>
                </span>
                Add
              </button>
            </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};
