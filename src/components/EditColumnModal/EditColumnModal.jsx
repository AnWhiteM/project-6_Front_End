import Modal from "react-modal";
import css from "./EditColumnModal.module.css";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import svg from "../../img/icons.svg";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateColumn } from "../../redux/columns/operations";

Modal.setAppElement("#root");

export const EditColumn = ({ isOpen, isClose, column }) => {
  const dispatch = useDispatch();
  const columnModalValidation = Yup.object().shape({
    columnname: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required!"),
  });

  const columnEditNotify = () => toast.success("You edited the column");

  const handleSubmit = (values) => {
    dispatch(
      updateColumn({
        title: values.columnname,
        column,
      })
    );
    columnEditNotify();
    isClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => isClose()}
        className={css.editColumnModal}
        overlayClassName={css.editColumnModalOverlay}
      >
        <button
          className={css.editColumnModalCloseBtn}
          type="button"
          onClick={() => isClose()}
        >
          <svg className={css.editColumnModalIcon} width="18px" height="18px">
            <use href={svg + "#x-close"}></use>
          </svg>
        </button>
        <div className={css.editColumnModalContainer}>
          <h1 className={css.editColumnModalText}>Edit column</h1>
          <Formik
            initialValues={{ columnname: column.title }}
            validationSchema={columnModalValidation}
            onSubmit={handleSubmit}
          >
            <Form autoComplete="off" className={css.editColumnModalForm}>
              <Field
                type="text"
                name="columnname"
                className={css.editColumnModalInput}
                placeholder="Title"
              />{" "}
              <ErrorMessage
                className={css.error}
                component="span"
                name="columnname"
              />
              <button type="submit" className={css.editColumnModalSubmit}>
                <span className={css.editColumnModalSpan}>
                  <svg
                    className={css.editColumnModalAddIcon}
                    width="14px"
                    height="14px"
                  >
                    <use href={svg + "#icon-plus"}></use>
                  </svg>
                </span>
                Edit
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
};
