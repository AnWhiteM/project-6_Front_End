import Modal from "react-modal";
import css from "./EditCardModal.module.css";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import svg from "../../img/icons.svg";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/tasks/operations.js";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import clsx from "clsx";
import "./react-date-picker.css";

Modal.setAppElement("#root");

export const EditCard = ({ isOpen, isClose, task }) => {
  const [selectedDate, setSelectedDate] = useState(task.deadline);

  const dispatch = useDispatch();
  const { deskId } = useParams();
  const taskModalValidation = Yup.object().shape({
    cardtitle: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required!"),
    carddescription: Yup.string()
      .min(3, "Too short!")
      .max(64, "Too long!")
      .required("Required!"),
  });

  const taskEditNotify = () => toast.success("You edited the task");

  const handleSubmit = (values) => {
    const updatedTask = {
      title: values.cardtitle,
      description: values.carddescription,
      deadline: selectedDate,
      priority: values.priority,
    };
    dispatch(
      updateTask({
        deskId,
        columnId: task.owner,
        taskId: task._id,
        updatedTask,
      })
    );
    taskEditNotify();
    isClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        className={css.editCardModal}
        overlayClassName={css.editCardModalOverlay}
      >
        <button
          className={css.editCardModalCloseBtn}
          type="button"
          onClick={isClose}
        >
          <svg className={css.editCardModalIcon} width="18px" height="18px">
            <use href={svg + "#x-close"}></use>
          </svg>
        </button>
        <div className={css.editCardModalContainer}>
          <h1 className={css.editCardModalText}>Edit card</h1>
          <Formik
            initialValues={{
              cardtitle: task.title,
              carddescription: task.description,
              priority: task.priority,
            }}
            validationSchema={taskModalValidation}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off" className={css.editCardModalForm}>
                <div className={css.errorContainer1}>
                  <ErrorMessage
                    name="cardtitle"
                    component="span"
                    className={css.error}
                  />
                </div>
                <Field
                  type="text"
                  name="cardtitle"
                  className={`${css.editCardModalInput1} ${
                    errors.cardtitle && touched.cardtitle ? css.inputError : ""
                  }`}
                  placeholder="Title"
                />

                <div className={css.errorContainer2}>
                  <ErrorMessage
                    name="carddescription"
                    component="span"
                    className={css.error}
                  />
                </div>
                <Field
                  as="textarea"
                  name="carddescription"
                  className={`${css.editCardModalInput2} ${
                    errors.carddescription && touched.carddescription
                      ? css.inputError
                      : ""
                  }`}
                  placeholder="Description"
                />

                <label className={css.editCardModalLabel}>
                  Label color
                  <div className={css.editCardModalRadioContainer}>
                    <div className={css.editCardModalRadioContainerRadio}>
                      <Field
                        type="radio"
                        value="Low"
                        className={css.editCardModalRadio1}
                        id="editCardModalRadio1"
                        name="priority"
                      />
                    </div>
                    <div className={css.editCardModalRadioContainerRadio}>
                      <Field
                        type="radio"
                        value="Medium"
                        className={css.editCardModalRadio2}
                        id="editCardModalRadio2"
                        name="priority"
                      />
                    </div>
                    <div className={css.editCardModalRadioContainerRadio}>
                      <Field
                        type="radio"
                        value="High"
                        className={css.editCardModalRadio3}
                        id="editCardModalRadio3"
                        name="priority"
                      />
                    </div>
                    <div className={css.editCardModalRadioContainerRadio}>
                      <Field
                        type="radio"
                        value="Without"
                        className={css.editCardModalRadio4}
                        id="editCardModalRadio4"
                        name="priority"
                      />
                    </div>
                  </div>
                </label>

                <div className={css.createCardModalDateContainer}>
                  <p className={css.deadlineText}>Deadline</p>
                  <DatePicker
                    wrapperClassName={css.wrapper}
                    className={clsx(css.calendar, css.input)}
                    calendarClassName={clsx(
                      css.calendarModal,
                      css.calendarContainer
                    )}
                    dateFormat="EEEE, MMMM dd"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    required
                    minDate={new Date()}
                    showIcon
                    icon={
                      <svg
                        className={clsx(
                          css.dateIcon,
                          css.calendarIcon,
                          css.Icon
                        )}
                        width="20"
                        height="20"
                      >
                        <use href={svg + "#chevron-down-icon"}></use>
                      </svg>
                    }
                  />
                </div>

                <button type="submit" className={css.editCardModalSubmit}>
                  <span className={css.editCardModalSpan}>
                    <svg
                      className={css.editCardModalAddIcon}
                      width="14px"
                      height="14px"
                    >
                      <use href={svg + "#icon-plus"}></use>
                    </svg>
                  </span>
                  Edit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

