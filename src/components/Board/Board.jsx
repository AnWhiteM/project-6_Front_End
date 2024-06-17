import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EditBoardModal from "../EditBoardModal/EditBoardModal";
import { useDispatch } from "react-redux";
import { currentBoard, deleteBoard } from "../../redux/boards/operations";
import toast from "react-hot-toast";

import svg from "../../img/icons.svg";
import css from "./Board.module.css";
import clsx from "clsx";
import { deleteColumn, getColumns } from "../../redux/columns/operations";
import { fetchTasks, deleteTask } from "../../redux/tasks/operations";

export default function Board({ board, allBoards }) {
  const { _id, title, icon, background } = board;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardDeleteNotify = () =>
    toast.error(`You deleted the board ${board.title}`);

  const handleDelete = async (e) => {
    e.stopPropagation();
    const columns = await dispatch(getColumns(_id));
    if (columns.payload.length > 0) {
      for (const column of columns.payload) {
        const tasks = await dispatch(fetchTasks(column));

        if (tasks.payload.length > 0) {
          for (const task of tasks.payload) {
            dispatch(
              deleteTask({
                deskId: column.owner,
                columnId: column._id,
                taskId: task._id,
              })
            );
          }
        }

        dispatch(deleteColumn(column));
      }
    }
    dispatch(deleteBoard(_id));
    boardDeleteNotify();
    if (allBoards.length === 0) {
      navigate("/home");
    }
  };

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    dispatch(currentBoard(_id));
  };

  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <div className={css.linkWrapper}>
      <NavLink to={`/home/${_id}`} className={linkClass} onClick={handleClick}>
        <div className={css.titleWrapper}>
          <svg className={css.titleIcon} width="18px" height="18px">
            <use href={`${svg}#${icon}`} />
          </svg>
          <h3 className={css.title}>{title}</h3>
        </div>
      </NavLink>
      <div className={css.btns}>
        <button className={css.btn} type="button" onClick={openModal}>
          <svg className={css.icon} width="16px" height="16px">
            <use href={svg + "#icon-pencil"}></use>
          </svg>
        </button>
        <button className={css.btn} type="button" onClick={handleDelete}>
          <svg className={css.icon} width="16px" height="16px">
            <use href={svg + "#icon-trash"}></use>
          </svg>
        </button>
      </div>
      {isModalOpen && (
        <EditBoardModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={title}
          icon={icon}
          boardId={_id}
          background={background}
        />
      )}
    </div>
  );
}
