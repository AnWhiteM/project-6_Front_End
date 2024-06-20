import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/boards/operations";

import css from "./CreateBoardModal.module.css";
import svg from "../../img/icons.svg";
import bgData from "../../assets/bg.json";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

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
    .required("Required"),
});

export default function CreateBoardModal({
  isOpen,
  onClose,
  initialTitle = "",
}) {
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedBg, setSelectedBg] = useState(bgData[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedBg);
  }, [selectedBg]);

  const handleSubmit = async (values, actions) => {
    const newBoard = {
      title: values.title,
      icon: values.icon,
      background: values.background,
    };
    actions.resetForm();
    const board = await dispatch(addBoard(newBoard));
    onClose();
    navigate(`/home/${board.payload._id}`);
  };

  const handleIconSelect = (icon, setFieldValue) => {
    setSelectedIcon(icon);
    setFieldValue("icon", icon);
  };

  const handleBgSelect = (bgId, setFieldValue) => {
    const selectedBackground = bgData.find((bg) => bg.id === bgId) || {};
    setSelectedBg(selectedBackground);
    setFieldValue("background", selectedBackground);
  };

  return (
    <Modal
      overlayClassName={css.overlay}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create new board"
    >
      <h2 className={css.title}>New board</h2>
      <button className={css.btnClose} type="button" onClick={onClose}>
        <svg className={css.iconClose} width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>

      <Formik
        initialValues={{
          title: initialTitle,
          icon: selectedIcon,
          background: selectedBg,
        }}
        validationSchema={titleValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={css.form}>
            <div className={css.formContainer}>
              <label htmlFor="title" />
              <div className={css.errorContainer}>
                <ErrorMessage
                  name="title"
                  component="span"
                  className={css.error}
                />
              </div>

              <Field
                type="title"
                name="title"
                placeholder="Title"
                className={`${css.input} ${
                  errors.name && touched.name ? css.inputError : ""
                }`}
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
                          checked={values.icon === icon}
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
                      <label
                        className={clsx(css.backgroundLabel, {
                          [css.selectedBg]: selectedBg.id === bg.id,
                        })}
                      >
                        <Field
                          className={clsx(css.radioInput, css.visuallyHidden)}
                          type="radio"
                          name="background"
                          value={bg.id}
                          checked={values.background.id === bg.id}
                          onChange={() => handleBgSelect(bg.id, setFieldValue)}
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
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
