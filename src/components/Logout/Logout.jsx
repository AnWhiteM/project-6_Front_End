import svg from "../../img/icons.svg";
import css from "./Logout.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success("Ти вийшов)");
      navigate("/auth/login");
    } catch (error) {
      toast.error("Помилка при виході");
    }
  };

  return (
    <div onClick={handleLogout} className={css.container}>
      <svg className={css.icon} width="32px" height="32px">
        <use className={css.icon} href={`${svg}#icon-login`}></use>
      </svg>
      <p> Log out </p>
    </div>
  );
}
