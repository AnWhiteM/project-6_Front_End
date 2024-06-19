import Modal from "react-modal";
import css from "./DeleteCard.module.css";
import svg from "../../img/icons.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export const DeleteCard = ({ isOpen, isClose, deleteTask, name }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        deleteTask();
        isClose();
        setSubmitting(false);
    }

    const deleteValidation = Yup.object().shape({
        title: Yup.string()
          .oneOf([name], "Title must match the task name.")
          .required("Required!")
    });

    return (
        <>
            <Modal
              isOpen={isOpen}
              onRequestClose={isClose}
              className={css.deleteCardModal}
              overlayClassName={css.deleteCardModalOverlay}
            >
            <button className={css.deleteCardModalCloseBtn} type="button" onClick={isClose}>
                <svg className={css.deleteCardModalIcon} width="18px" height="18px">
                    <use href={svg + "#x-close"}></use>
                </svg>
            </button>
            <div className={css.deleteModalContainer}>
                <h4 className={css.deleteModalText}>Are you sure you want delete Task?</h4>
                <Formik
                  initialValues={{ title: "" }}
                  validationSchema={deleteValidation}
                  onSubmit={handleSubmit}
                  validateOnChange={true}
                  validateOnBlur={false}
                >
                    {({ errors }) => (
                        <Form autoComplete="off" className={css.deleteModalForm}>
                            <label className={css.deleteModalLabel}>Please, write the title of the Task
                                <Field
                                  type="text"
                                  name="title"
                                  className={`${css.deleteModalInput} ${errors.title ? css.errorBorder : ''}`}
                                  placeholder={name}
                                  required
                                />
                            </label>
                            <button type="submit" className={css.deleteModalSubmit}>
                              Delete
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            </Modal>
        </>
    )
}
