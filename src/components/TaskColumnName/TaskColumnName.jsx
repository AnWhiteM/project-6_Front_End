import css from "./TaskColumnName.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";
import { EditColumn } from "../EditColumnModal/EditColumnModal";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../../redux/columns/operations";

export const TaskColumnName = ({ column }) => {
  const [taskColumnModal, setTaskColumnModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setTaskColumnModal(true);
  };

  const closeModal = () => {
    setTaskColumnModal(false);
  };

  const columnDeleteNotify = () =>
    toast.error(`You deleted the column ${column.title}`);

  const handleDelete = () => {
    dispatch(deleteColumn(column));
    columnDeleteNotify();
  };

  return (
    <div className={css.taskColumn}>
      <span className={css.columnName}>{column.title}</span>
      <div className={css.icons}>
        <button className={css.iconButton} onClick={openModal}>
          <svg className={css.icon} width="16px" height="16px">
            <use href={svg + "#icon-pencil"}></use>
          </svg>
        </button>
        <button className={css.iconButton} onClick={handleDelete}>
          <svg className={css.icon} width="16px" height="16px">
            <use href={svg + "#icon-trash"}></use>
          </svg>
        </button>
      </div>
      {taskColumnModal && (
        <EditColumn
          isOpen={taskColumnModal}
          isClose={closeModal}
          column={column}
        />
      )}
    </div>
  );
};
