import css from "./TaskColumnName.module.css";
import svg from "../../img/icons.svg";

export const TaskColumnName = () => {
  return (
    <div className={css.taskColumn}>
      <span className={css.columnName}>To Do</span>
      <div className={css.icons}>
        <button className={css.iconButton}>
        <svg className={css.icon} width="16px" height="16px">
          <use href={svg + "#icon-pencil"}></use>
        </svg>
        </button>
        <button className={css.iconButton}>
        <svg className={css.icon} width="16px" height="16px">
          <use href={svg + "#icon-trash"}></use>
        </svg>
        </button>
      </div>
    </div>
  );
};
