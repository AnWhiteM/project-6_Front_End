import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import PasswordField from "../PasswordField/PasswordField";
import { updateUserInfo } from "../../redux/auth/operations";
import { updAvatarURL } from "../../redux/auth/slice";
import axios from "axios";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "../UserEditModal/UserEditModal.module.css";
import svg from "../../img/icons.svg";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(4, "Too Short!").max(64, "Too Long!"),
  email: Yup.string().email("Must be a valid email!"),
  password: Yup.string().min(8, "Too short").max(64, "Too long"),
});

export default function UserEditModal({ onClose }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  
  const fileInputRef = useRef(null);

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("avatar", file);
        const response = await axios.put(
          "https://project06back.onrender.com/users/avatar",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const url = response.data.avatarURL;
        if (url) {
          dispatch(updAvatarURL(url));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (values) => {
    try {
      let sendInfo = {};

      if (values.name !== user.name) {
        sendInfo.name = values.name;
      }
      if (values.email !== user.email) {
        sendInfo.email = values.email;
      }

      if (values.password !== "") {
        sendInfo.password = values.password;
      }

      await dispatch(updateUserInfo(sendInfo))
        .unwrap()
        .then((data) => {
          if (data === "") {
            toast.error(
              "You have not updated any details.Please review and update "
            );
          } else {
            toast.success("Profile updated successfully");
            onClose();
          }
        });
    } catch (error) {
      let statusCode = error.slice(-3);
      let nmb = parseInt(statusCode);

      if (nmb === 409) {
        toast.error("Email already in use. Please use a different email.");
      } else {
        toast.error("The error occured.Please try again");
      }
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
              <svg
                width="18"
                height="18"
                stroke="currentColor"
                className={css.icon}
              >
                <use href={svg + "#icon-x-close"}></use>
              </svg>
            </button>
          </div>
          <p className={css.txt}>Edit Profile</p>
          <div className={css.avatarContainer}>
            <button
            
            type="button"
            className={css.avatarBtn}
            onClick={() => handleButtonClick()}>
            <span
              className={`${css.avatarBig} ${css.avatar}`}
              style={
                user.avatarURL
                  ? { backgroundImage: `url(${user.avatarURL})` }
                  : {}
              }
            />
            </button>

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
              {({ errors, touched }) => (
              <Form className={css.forma} autoComplete="off">
                <div className={css.formGroup}>
                  <label htmlFor="name" className={css.formLabel} />
                  <div className={css.errorContainer}>
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                  </div>
          
                  <Field
                    type="text"
                    name="name"
                    className={`${css.formInput} ${
                      errors.name && touched.name ? css.inputError : ""
                    }`}
                    placeholder="Name"
                  />
                  
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="email" className={css.formLabel} />
                  <div className={css.errorContainer}>
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                  </div>
          
                  <Field
                    type="text"
                    name="email"
                    className={`${css.formInput} ${
                      errors.email && touched.email ? css.inputError : ""
                    }`}
                    placeholder="Email"s
                  />
                  
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="password" className={css.formLabel} />
                  <div className={css.errorContainer}>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.error}
                  />
                  </div>
                  <PasswordField />
                </div>

                <button type="submit" className={css.btn}>
                  Send
                </button>
              </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
