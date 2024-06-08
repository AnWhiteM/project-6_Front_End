import Modal from "react-modal";
import css from "./CreateColumn.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";

Modal.setAppElement('#root');

export const CreateColumn = (isOpen, isClose) => {
    const columnModalValidation = Yup.object.shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });
    const createColumnStyle = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '335px',
          height: '221px'
        },
      };

    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={isClose} style={createColumnStyle}>
        <button type="button" className={css.createColumnModalCloseBtn}>Close</button>
        <div className={css.createColumnModalContainer}>
            <h1 className={css.createColumnModalText}>Add column</h1>
            <Formik
                initialValues={{ columnname: ''}}
                validationSchema={columnModalValidation}
                onSubmit={(values, actions) => {

                }}>
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