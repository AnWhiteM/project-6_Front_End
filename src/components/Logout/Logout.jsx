import svg from "../../img/icons.svg";
import css from "./Logout.module.css";
import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";

// import { logOut } from "../../redux/auth/operations";

export default function Logout() {
  // const dispatch = useDispatch();

  const Notify = () => toast.success("Ти вийшов)");
  return (
    <div className={css.container}>
      <svg onClick={Notify} className={css.icon} width="32px" height="32px">
        <use className={css.icon} href={svg + "#icon-login"}></use>
      </svg>
      <p> Log out </p>
    </div>
  );
}
// onClick={() => dispatch(logOut())}
