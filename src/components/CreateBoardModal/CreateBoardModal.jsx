import { useState } from "react";
import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { addBoard } from "../../redux/boards/operations";

import css from "../EditBoardModal/EditBoardModal.module.css";
import svg from "../../img/icons.svg";
import bgData from "../../assets/bg.json";
import clsx from "clsx";

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

export default function CreateBoardModal({
  isOpen,
  onClose,
  initialTitle = "",
}) {
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedBg, setSelectedBg] = useState(bgData[0].id);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newBoard = {
      // Значення які будемо передавати на редакс
    };
    actions.resetForm();
    dispatch(addBoard(newBoard));
  };

  const handleIconSelect = (icon, setFieldValue) => {
    setSelectedIcon(icon);
    setFieldValue("icon", icon);
  };

  const handleBgSelect = (bg, setFieldValue) => {
    setSelectedBg(bg);
    setFieldValue("background", bg);
  };

  const submitHandler = (values, actions) => {
    console.log(values);

    // Local storage - start
    const storedData = JSON.parse(localStorage.getItem("boardData"));

    const updatedData = Array.isArray(storedData)
      ? [...storedData, values]
      : [values];

    localStorage.setItem("boardData", JSON.stringify(updatedData));
    // Local storage - end

    actions.resetForm();
    onClose();
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
        onSubmit={submitHandler}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="title"></label>
              <Field
                className={css.input}
                name="title"
                placeholder="Title"
                required
              />
              <ErrorMessage
                className={css.error}
                component="span"
                name="title"
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
                          checked={selectedBg === bg.id}
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
