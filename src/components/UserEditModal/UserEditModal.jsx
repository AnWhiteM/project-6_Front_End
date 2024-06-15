import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
// import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import PasswordField from "../PasswordField/PasswordField";
import { updateUserInfo } from "../../redux/auth/operations";
// import { updAvatarURL } from "../../redux/auth/operations.js";
import axios from "axios";
import * as Yup from "yup";
import css from "../UserEditModal/UserEditModal.module.css";
import svg from "../../img/icons.svg";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(64, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(64, "Too long")
    .required("Required"),
});

export default function UserEditModal({ onClose }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // хранит текущ выбранный файл - по умолч null
  // const [avatarFile, setAvatarFile] = useState("");

  // ссылка к скрытому тнпуту тип файл
  const fileInputRef = useRef(null);

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
    updAvatarURL("https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg");
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        //создаем новый объект FormData для отправки файла на сервер
        const formData = new FormData();
        //добавляем выбранный файл в объект FormData
        formData.append("file", file);
        const response = await axios.put(
          "https://project06back.onrender.com/current/avatar",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const { url } = response.data;
        if (url) {
          // Установим новый URL аватара в стейт пользователя
          // setAvatarFile(url);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (values) => {
    try {
      const sendInfo = {
        // avatarURL: avatarFile, // Используем URL из состояния компонента - не нужно отправ беk сохраняет его у себя
        name: values.name,
        email: values.email,
        password: values.password,
      };
      await dispatch(updateUserInfo(sendInfo)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={css.backdrop} onClick={() => onClose()}>
        <div
          className={`${css.container} ${css.cont}`}
          onClick={(e) => handleMenuClick(e)}
        >
          <div className={css.wrap}>
            <button className={css.closeBtn} onClick={() => onClose()}>
              <svg width="18" height="18" stroke="currentColor">
                <use href={svg + "#icon-x-close"}></use>
              </svg>
            </button>
          </div>
          <p className={css.txt}>Edit Profile</p>
          <div className={css.avatarContainer}>
            <span
              className={`${css.avatarBig} ${css.avatar}`}
              // style={{
              //   backgroundImage: `url(${user.avatarURL})`,
              // }}
            />

            <button
              type="button"
              className={css.plusBtn}
              onClick={() => handleButtonClick()}
            >
              <svg width="10" height="10" stroke="currentColor">
                <use href={svg + "#icon-plus"}></use>
              </svg>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e)}
              />
            </button>
          </div>
          <div>
            <Formik
              initialValues={{
                avatarURL: user.avatarURL || "",
                name: user.name || "",
                email: user.email || "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={ValidationSchema}
            >
              <Form className={css.forma} autoComplete="off">
                {/* <Field
                  type="text"
                  name="avatarURL"
                  className={css.formInput}
                  placeholder="avatar"
                /> */}
                <div className={css.formGroup}>
                  <label htmlFor="name" className={css.formLabel} />
                  <Field
                    type="text"
                    name="name"
                    className={css.formInput}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="email" className={css.formLabel} />
                  <Field
                    type="text"
                    name="email"
                    className={css.formInput}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="password" className={css.formLabel} />

                  <PasswordField />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.error}
                  />
                </div>

                <button type="submit" className={css.btn}>
                  Send
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
