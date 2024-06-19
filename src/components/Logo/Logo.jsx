import svg from "../../img/icons.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.container}>
        <div className={css.logo}>
        <svg className={css.icon} width="14" height="18">
          <use href={svg + "#icon-logo"}></use>
        </svg>
        </div>
        <p className={css.text}>Task Pro</p>
    </div>
  );
}
