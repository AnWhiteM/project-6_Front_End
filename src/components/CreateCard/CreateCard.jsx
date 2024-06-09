import Modal from "react-modal";
import css from "./CreateCard.module.css";
import * as Yup from 'yup';
import { Form, Formik, Field } from "formik";
import svg from "../../img/icons.svg";

Modal.setAppElement('#root');

export const CreateCard = ({ isOpen, isClose }) => {
    const columnModalValidation = Yup.object().shape({
        columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
    });

    return (
    <>
    <Modal isOpen={isOpen} onRequestClose={isClose} className={css.createCardModal} overlayClassName={css.createCardModalOverlay}>
    <button className={css.createCardModalCloseBtn} type="button" onClick={isClose}>
        <svg className={css.createCardModalIcon} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
        <div className={css.createCardModalContainer}>
            <h1 className={css.createCardModalText}>Add card</h1>
            <Formik
                initialValues={{ cardtitle: '', carddescription: ''}}
                validationSchema={columnModalValidation}
                // onSubmit={(values, actions) => {}}
                    >
                    <Form autoComplete="off" className={css.createCardModalForm}>
                        <Field type='text' name='cardtitle' className={css.createCardModalInput1} placeholder="Title" />
                        <Field as='textarea' name='carddescription' className={css.createCardModalInput2} placeholder="Description" />
                        <label>Label color
                            <div className={css.createCardModalRadioContainer}>
                                <Field type="radio" id="color1" name="color" className={css.createCardModalRadio1} />
                                <label htmlFor="color1"></label>
                                <Field type="radio" id="color2" name="color" className={css.createCardModalRadio2} />
                                <label htmlFor="color2"></label>
                                <Field type="radio" id="color3" name="color" className={css.createCardModalRadio3} />
                                <label htmlFor="color3"></label>
                                <Field type="radio" id="color4" name="color" className={css.createCardModalRadio4} />
                                <label htmlFor="color4"></label>
                            </div>
                        </label>

                        
                        <button type="submit" className={css.createCardModalSubmit} onClick={() => isClose()}>
                            <span className={css.createCardModalSpan}>
                                <svg className={css.createCardModalAddIcon} width="14px" height="14px">
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