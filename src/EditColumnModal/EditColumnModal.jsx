import Modal from "react-modal";
import css from "EditColumn.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";
import svg from "../../img/icons.svg";

Modal.setAppElement('#root');

export const EditColumn = ({ isOpen, isClose, title }) => {
    const columnModalValidation = Yup.object().shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });


    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={() => isClose()} className={css.editColumnModal} overlayClassName={css.editColumnModalOverlay}>
    <button className={css.editColumnModalCloseBtn} type="button" onClick={isClose}>
        <svg className={css.editColumnModalIcon} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
        <div className={css.editColumnModalContainer}>
            <h1 className={css.editColumnModalText}>Edit column</h1>
            <Formik
                initialValues={{ columnname: modalName }}
                validationSchema={columnModalValidation}
                portalClassName="createColumnModalContainer"
                // onSubmit={(values, actions) => {}}
                >
                    <Form autoComplete="off" className={css.editColumnModalForm}>
                        <Field type='text' name='columnname' className={css.editColumnModalInput} placeholder="Title" />
                        <button type="submit" className={css.editColumnModalSubmit} onClick={() => isClose()}>
                            <span className={css.editColumnModalSpan}>
                                <svg className={css.editColumnModalAddIcon} width="14px" height="14px">
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