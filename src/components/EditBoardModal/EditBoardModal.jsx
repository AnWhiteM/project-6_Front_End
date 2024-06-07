import { useState } from "react";
import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import svg from "../../img/icons.svg";
import bgData from "../../assets/bg.json";
import css from "./EditBoardModal.module.css";

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
}) {
  const [selectedIcon, setSelectedIcon] = useState(icon);
  const [selectedBg, setSelectedBg] = useState(background);

  const handleIconSelect = (icon, setFieldValue) => {
    setSelectedIcon(icon);
    setFieldValue("icon", icon);
  };

  const handleBgSelect = (bg, setFieldValue) => {
    setSelectedBg(bg);
    setFieldValue("background", bg);
  };

  const submitHandler = (values, actions) => {
    // Local storage - start
    const storedData = JSON.parse(localStorage.getItem("boardData"));

    const updatedData = storedData.map((board) => {
      if (board.title === title) {
        return {
          ...board,
          title: values.title,
          icon: values.icon,
          background: values.background,
        };
      }
      return board;
    });

    localStorage.setItem("boardData", JSON.stringify(updatedData));
    // Local storage - end

    actions.resetForm();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit board">
      <h2>Edit board</h2>
      <button type="button" onClick={onClose}>
        <svg width="18px" height="18px">
          <use href={svg + "#x-close"}></use>
        </svg>
      </button>
      <Formik
        initialValues={{
          title: title,
          icon: icon,
          background: background,
        }}
        validationSchema={titleValidationSchema}
        onSubmit={submitHandler}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" placeholder="Title" required />
              <ErrorMessage component="span" name="title" />
            </div>
            <div>
              <label>Choose an Icon:</label>
              <div>
                {icons.map((icon, index) => (
                  <button
                    key={index}
                    type="button"
                    // className={selectedIcon === icon ? "selected" : ""}
                    onClick={() => handleIconSelect(icon, setFieldValue)}
                  >
                    <svg width="24px" height="24px">
                      <use href={`${svg}#${icon}`} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label>Choose a Background:</label>
              <div>
                {bgData.map((bg) => (
                  <button
                    key={bg.id}
                    type="button"
                    // className={selectedBg === bg.id ? "selected" : ""}
                    onClick={() => handleBgSelect(bg.id, setFieldValue)}
                  >
                    <img
                      srcSet={`${bg.mob} 375w, ${bg.tab} 768w, ${bg.desc} 1180w`}
                      sizes="(max-width: 767px) 375px, (min-width: 768px) 768px, (min-width: 1440px) 1180px"
                      src={bg.mini}
                      alt={bg.id}
                      width="28px"
                      height="28px"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button type="submit">
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