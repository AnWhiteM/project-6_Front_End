import css from "./TaskColumnName.module.css";
import svg from "../../img/icons.svg";
import { useState} from "react"
import { EditColumn } from "../EditColumnModal/EditColumnModal";

export const TaskColumnName = () => {
  const [taskColumnModal, setTaskColumnModal] = useState(false);
  
  const openModal = () => {
    setTaskColumnModal(true)
  }
    
  const closeModal = () => {
    setTaskColumnModal(false)
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
      {taskColumnModal &&
        <EditColumn isOpen={taskColumnModal} isClose={closeModal} title={"To Do"} />}
    </div>
  );
};
