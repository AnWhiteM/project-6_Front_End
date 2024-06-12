import Modal from "react-modal";
import css from "./CreateColumnModal.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";
import svg from "../../img/icons.svg";

Modal.setAppElement('#root');

export const CreateColumn = ({ isOpen, isClose }) => {
    const columnModalValidation = Yup.object().shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });


    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={() => isClose()} className={css.createColumnModal} overlayClassName={css.createColumnModalOverlay}>
    <button className={css.createColumnModalCloseBtn} type="button" onClick={isClose}>
        <svg className={css.createColumnModalIcon} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
        <div className={css.createColumnModalContainer}>
            <h1 className={css.createColumnModalText}>Add column</h1>
            <Formik
                initialValues={{ columnname: ''}}
                validationSchema={columnModalValidation}
                portalClassName="createColumnModalContainer"
                // onSubmit={(values, actions) => {}}
                >
                    <Form autoComplete="off" className={css.createColumnModalForm}>
                        <Field type='text' name='columnname' className={css.createColumnModalInput} placeholder="Title" />
                        <button type="submit" className={css.createColumnModalSubmit} onClick={() => isClose()}>
                            <span className={css.createColumnModalSpan}>
                                <svg className={css.createColumnModalAddIcon} width="14px" height="14px">
                                    <use href={svg + "#icon-plus"}></use>
                                </svg>
                            </span>
                        Add</button>
                    </Form>
            </Formik>
        </div>
    </Modal>
    </>
)
}