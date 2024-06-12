import css from "./TaskColumnName.module.css";
import svg from "../../img/icons.svg";
import { useState} from "react"
import { EditColumn } from "../EditColumnModal/EditColumnModal";

export const TaskColumnName = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true)
  }
    
  const closeModal = () => {
    setIsOpen(false)
  }
  
  return (
    <div className={css.taskColumn}>
      <span className={css.columnName}>To Do</span>
      <div className={css.icons}>
        <button className={css.iconButton} onClick={openModal}>
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
      {isOpen &&
        <EditColumn isOpen={openModal} isClose={closeModal} title={"To Do"} />}
    </div>
  );
};
