import { Link } from "react-router-dom";

import svg from "../../img/icons.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <Link to="/home">
      <svg className={css.icon} width="32" height="32">
        <use href={svg + "#icon-logo"}></use>
      </svg>
      </Link>
      <p>Task Pro</p>
    </div>
  );
}
