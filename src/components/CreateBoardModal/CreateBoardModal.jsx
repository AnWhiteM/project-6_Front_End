import { useState } from "react";
import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "../EditBoardModal/EditBoardModal.module.css";
import svg from "../../img/icons.svg";
import bgData from "../../assets/bg.json";


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
  const [selectedBg, setSelectedBg] = useState("");

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
      portalClassName={css.portal}
      overlayClassName={css.overlay}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create new board"
    >
      <h2>New board</h2>
      <svg className={css.close} onClick={onClose} width="18px" height="18px">
        <use href={svg + "#x-close"}></use>
      </svg>

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
              <ErrorMessage component="span" name="title" />
            </div>
            <div>
              <label>Icons</label>
              <div className={css.iconList}>
                {icons.map((icon, index) => (
                  <button
                    key={index}
                    type="button"
                    className={selectedIcon === icon ? "selected" : ""}
                    onClick={() => handleIconSelect(icon, setFieldValue)}
                  >
                    <svg width="18px" height="18px">
                      <use href={`${svg}#${icon}`} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label> Background</label>
              <div className="backgroundList">
                {bgData.map((bg) => (
                  <button
                    key={bg.id}
                    type="button"
                    className={selectedBg === bg.id ? "selected" : ""}
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
              <button className={css.button} type="submit">
                <div className={css.containerButton}>
                  <svg className={css.buttonIcone} width="14px" height="14px">
                    <use href={svg + "#icon-plus"}></use>
                  </svg>
                </div>
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
