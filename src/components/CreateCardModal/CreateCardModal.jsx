import Modal from "react-modal";
import css from "./CreateCardModal.module.css";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import svg from "../../img/icons.svg";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operations";

Modal.setAppElement("#root");

export const CreateCard = ({ isOpen, isClose, column }) => {
  const dispatch = useDispatch();

  const radioBtns = [
    {
      priority: "Low",
      labelColor: "#8FA1D0",
      class: css.createCardModalRadio1,
      id: "createCardModalRadio1",
    },
    {
      priority: "Medium",
      labelColor: "#E09CB5",
      class: css.createCardModalRadio2,
      id: "createCardModalRadio2",
    },
    {
      priority: "High",
      labelColor: "#BEDBB0",
      class: css.createCardModalRadio3,
      id: "createCardModalRadio3",
    },
    {
      priority: "Without",
      labelColor: "#5B5B5B",
      class: css.createCardModalRadio4,
      id: "createCardModalRadio4",
    },
  ];

  const handleSubmit = (values, actions) => {
    console.log(values.priority);

    const newTask = {
      title: values.title,
      description: values.description,
      priority: values.priority.priority,
      labelColor: values.priority.labelColor,
      deadline: "2024-06-14T23:59:59.000+00:00",
    };
    actions.resetForm();
    dispatch(
      addTask({
        column,
        newTask,
      })
    );
    isClose();
  };

  const initialValues = {
    title: "",
    description: "",
    priority: "Without",
  };

  const columnModalValidation = Yup.object().shape({
    title: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required!"),
    description: Yup.string()
      .min(3, "Too short!")
      .max(100, "Too long!")
      .required("Required!"),
    priority: Yup.string().required("Required!"),
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      className={css.createCardModal}
      overlayClassName={css.createCardModalOverlay}
    >
      <button
        className={css.createCardModalCloseBtn}
        type="button"
        onClick={isClose}
      >
        <svg className={css.createCardModalIcon} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
      <div className={css.createCardModalContainer}>
        <h1 className={css.createCardModalText}>Add card</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={columnModalValidation}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form autoComplete="off" className={css.createCardModalForm}>
              <Field
                type="text"
                name="title"
                className={css.createCardModalInput1}
                placeholder="Title"
              />
              <Field
                as="textarea"
                name="description"
                className={css.createCardModalInput2}
                placeholder="Description"
              />
              <label className={css.createCardModalLabel}>
                Label color
                <ul className={css.createCardModalRadioList}>
                  {radioBtns.map((radioBtn, index) => (
                    <li key={index} className={css.ContainerRadio}>
                      <Field
                        type="radio"
                        name="priority"
                        value={""}
                        className={radioBtn.class}
                        id={radioBtn.id}
                      />
                    </li>
                  ))}
                </ul>
              </label>
              <button type="submit" className={css.createCardModalSubmit}>
                <span className={css.createCardModalSpan}>
                  <svg
                    className={css.createCardModalAddIcon}
                    width="14px"
                    height="14px"
                  >
                    <use href={svg + "#icon-plus"}></use>
                  </svg>
                </span>
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
