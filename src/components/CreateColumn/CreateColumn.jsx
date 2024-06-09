import Modal from "react-modal";
import css from "./CreateColumn.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";

Modal.setAppElement('#root');

export const CreateColumn = (isOpen, isClose) => {
    const columnModalValidation = Yup.object().shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });


    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={isClose} className={css.createColumnModal} overlayClassName={css.createColumnModalOverlay}>
        <button type="button" className={css.createColumnModalCloseBtn}>Close</button>
        <div className={css.createColumnModalContainer}>
            <h1 className={css.createColumnModalText}>Add column</h1>
            <Formik
                initialValues={{ columnname: ''}}
                validationSchema={columnModalValidation}
                portalClassName="createColumnModalContainer"
                // onSubmit={(values, actions) => {}}
                >
                    <Form autoComplete="off">
                        <Field type='text' name='columnname' />
                        <button type="submit">Add</button>
                    </Form>
            </Formik>
        </div>

    </Modal>
    </>
)
}