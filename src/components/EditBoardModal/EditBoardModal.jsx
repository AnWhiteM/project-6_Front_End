import { useState } from "react";
import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import svg from "../../img/icons.svg";
import bgData from "../../assets/bg.json";
import css from "./EditBoardModal.module.css";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateBoard } from "../../redux/boards/operations";

const icons = [
  "icon-i-1-project",
  "icon-i-2",
  "icon-i-3",
  "icon-i-4",
  "icon-i-5",
  "icon-i-6",
  "icon-i-7",
  "icon-i-8",
];

Modal.setAppElement("#root");

const titleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too short!")
    .max(20, "Too long!")
    .required("Required field"),
});

export default function EditBoardModal({
  isOpen,
  onClose,
  title,
  icon,
  background,
  boardId,
}) {
  const dispatch = useDispatch();

  const [selectedIcon, setSelectedIcon] = useState(icon || icons[0]);
  const [selectedBg, setSelectedBg] = useState(bgData[background.id - 1]);

  const handleIconSelect = (icon, setFieldValue) => {
    setSelectedIcon(icon);
    setFieldValue("icon", icon);
  };

  const handleBgSelect = (bg, setFieldValue) => {
    setSelectedBg(bg);
    setFieldValue("background", bg);
  };

  const contactEditNotify = () => toast.success("You edited the board");

  const submitHandler = (values) => {
    dispatch(
      updateBoard({
        title: values.title,
        icon: selectedIcon,
        background: selectedBg,
        id: boardId,
      })
    );

    contactEditNotify();
    onClose();
  };

  return (
    <Modal
      overlayClassName={css.overlay}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit board"
    >
      <h2 className={css.title}>Edit board</h2>
      <button className={css.btnClose} type="button" onClick={onClose}>
        <svg className={css.iconClose} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
      <Formik
        initialValues={{
          title: title,
          icon: icon,
          background: background || bgData[0],
        }}
        validationSchema={titleValidationSchema}
        onSubmit={submitHandler}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formContainer}>
              <label htmlFor="title"></label>
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="title"
                  component="span"
                  className={css.error}
                />
              </div>
              <Field
                id="title"
                className={`${css.input} ${
                  errors.name && touched.name ? css.inputError : ""
                }`}
                name="title"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <div>
                <p className={css.listName}>Icons</p>
                <ul className={css.iconList}>
                  {icons.map((icon, index) => (
                    <li key={index}>
                      <label className={css.iconLabel}>
                        <Field
                          className={clsx(css.radioInput, css.visuallyHidden)}
                          type="radio"
                          name="icon"
                          value={icon}
                          checked={selectedIcon === icon}
                          onChange={() => handleIconSelect(icon, setFieldValue)}
                        />
                        <svg
                          className={css.userIcon}
                          width="18px"
                          height="18px"
                        >
                          <use href={`${svg}#${icon}`} />
                        </svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className={css.listName}>Backgrounds</p>
                <ul className={css.bgList}>
                  {bgData.map((bg) => (
                    <li key={bg.id}>
                      <label className={css.backgroundLabel}>
                        <Field
                          className={clsx(css.radioInput, css.visuallyHidden)}
                          type="radio"
                          name="background"
                          value={bg.id}
                          checked={selectedBg.id === bg.id}
                          onChange={() => handleBgSelect(bg, setFieldValue)}
                        />
                        <img
                          className={css.userBg}
                          src={bg.mini}
                          alt={bg.id}
                          width="28px"
                          height="28px"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <button className={css.confirmBtn} type="submit">
                <span className={css.iconWrapper}>
                  <svg className={css.iconPlus} width="14px" height="14px">
                    <use href={svg + "#icon-plus"}></use>
                  </svg>
                </span>
                Edit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
