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
  const [selectedBg, setSelectedBg] = useState(background || bgData[0].id);

  const handleIconSelect = (icon, setFieldValue) => {
    setSelectedIcon(icon);
    setFieldValue("icon", icon);
  };

  const handleBgSelect = (bgId, setFieldValue) => {
    const selectedBackground = bgData.find((bg) => bg.id === bgId);
    if (selectedBackground) {
      const { id, mini, mini2x, ...bgs } = selectedBackground;
      setSelectedBg(bgId);
      setFieldValue("background", bgs);
      console.log(bgs);
    }
  };

  const contactEditNotify = () => toast.success("You edit board");

  const submitHandler = (values) => {
    dispatch(
      updateBoard({
        title: values.title,
        icon: selectedIcon,
        background: values.background,
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
          background: background,
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
                          checked={selectedBg === background}
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
                Edit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
