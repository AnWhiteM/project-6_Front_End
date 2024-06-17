import Modal from "react-modal";
import css from "./FilterModal.module.css";
import svg from "../../img/icons.svg";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setFilterPriority } from "../../redux/filter/slice";

Modal.setAppElement('#root');

export const FilterModal = ({ isOpen, isClose }) => {
const dispatch = useDispatch();

const handleFilterChange = (event) => {
    dispatch(setFilterPriority(event.target.value))
}

    return (
        <>
            <Modal 
                isOpen={isOpen} 
                onRequestClose={isClose} 
                className={css.filterModal} 
                overlayClassName={css.filterModalOverlay}
            >
                <button className={css.filterModalCloseBtn} type="button" onClick={isClose}>
                    <svg className={css.filterModalIcon} width="18px" height="18px">
                        <use href={svg + "#x-close"}></use>
                    </svg>
                </button>
                <div className={css.filterModalContainer}>
                    <div className={css.filterBorder}>
                        <h1 className={css.filterModalText}>Filters</h1>
                    </div>
                    <Formik
                    >
                        {() => (
                            <Form>
                                <div className={css.filterLabel}>
                                    <p className={css.filterModalText2}>Label color</p>
                                    <button 
                                        type="button" 
                                        value="All"
                                        className={css.filterShowAllBtn} 
                                        name="priority"
                                        onClick={handleFilterChange}
                                    >
                                        Show all
                                    </button>
                                </div>
                                <div className={css.filterModalRadioContainer}>
                                    <label className={css.filterModalRadioContainerRadio}>
                                        <Field type="radio" value="Without" className={css.filterModalRadio4} id="editCardModalRadio4" name="priority" onChange={handleFilterChange} />
                                        <span className={css.filterModalRadioText}>Without priority</span>
                                    </label>
                                    <label className={css.filterModalRadioContainerRadio}>
                                        <Field type="radio" value="Low" className={css.filterModalRadio1} id="editCardModalRadio1" name="priority" onChange={handleFilterChange} />
                                        <span className={css.filterModalRadioText}>Low</span>
                                    </label>
                                    <label className={css.filterModalRadioContainerRadio}>
                                        <Field type="radio" value="Medium" className={css.filterModalRadio2} id="editCardModalRadio2" name="priority" onChange={handleFilterChange} />
                                        <span className={css.filterModalRadioText}>Medium</span>
                                    </label>
                                    <label className={css.filterModalRadioContainerRadio}>
                                        <Field type="radio" value="High" className={css.filterModalRadio3} id="editCardModalRadio3" name="priority" onChange={handleFilterChange} />
                                        <span className={css.filterModalRadioText}>High</span>
                                    </label>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    )
}
