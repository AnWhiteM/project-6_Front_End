import css from "./AddAnotherCardBtn.module.css";
import svg from "../../img/icons.svg";

export const AddAnotherCardBtn = () => {
  return (
    <div className={css.container}>
      <button className={css.btn}>
        <div className={css.iconBox}>
          <svg className={css.icon} width="14px" height="14px">
            <use href={svg + "#icon-plus"}></use>
          </svg>
        </div>
        Add another card
      </button>
    </div>
  );
};
