import Modal from "react-modal";
import css from "./EditCardModal.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";
import svg from "../../img/icons.svg";

Modal.setAppElement('#root');

export const EditCard = ({ isOpen, isClose }) => {
    const columnModalValidation = Yup.object().shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });

    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={isClose} className={css.editCardModal} overlayClassName={css.editCardModalOverlay}>
    <button className={css.editCardModalCloseBtn} type="button" onClick={isClose}>
        <svg className={css.editCardModalIcon} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
        <div className={css.editCardModalContainer}>
            <h1 className={css.editCardModalText}>Edit card</h1>
            <Formik
                initialValues={{ cardtitle: '', carddescription: ''}}
                validationSchema={columnModalValidation}
                // onSubmit={(values, actions) => {}}
                    >
                    <Form autoComplete="off" className={css.editCardModalForm}>
                        <Field type='text' name='cardtitle' className={css.editCardModalInput1} placeholder="Title" />
                        <Field as='textarea' name='carddescription' className={css.editCardModalInput2} placeholder="Description" />
                        <label>Label color
                            <div className={css.editCardModalRadioContainer}>
                                <div>
                                    <Field type="radio" value="Low" className={css.editCardModalRadio1} id="editCardModalRadio1" name="color" />
                                    <label htmlFor="editCardModalRadio1" className="radio-label"></label>
                                </div>
                                <div>
                                    <Field type="radio" value="Medium" className={css.editCardModalRadio2} id="editCardModalRadio2" name="color" />
                                    <label htmlFor="editCardModalRadio2" className="radio-label"></label>
                                </div>
                                <div>
                                    <Field type="radio" value="High" className={css.editCardModalRadio3} id="editCardModalRadio3" name="color" />
                                    <label htmlFor="editCardModalRadio3" className="radio-label"></label>
                                </div>
                                <div>
                                    <Field type="radio" value="Without priority" className={css.editCardModalRadio4} id="editCardModalRadio4" name="color" />
                                    <label htmlFor="editCardModalRadio4" className="radio-label"></label>
                                </div>
                            </div>
                        </label>
                        
                        <button type="submit" className={css.editCardModalSubmit} onClick={() => isClose()}>
                            <span className={css.editCardModalSpan}>
                                <svg className={css.editCardModalAddIcon} width="14px" height="14px">
                                    <use href={svg + "#icon-plus"}></use>
                                </svg>
                            </span>
                        Edit</button>
                    </Form>
            </Formik>
        </div>

    </Modal>
    </>
)
}