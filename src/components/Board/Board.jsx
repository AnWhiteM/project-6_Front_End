import { useState } from "react";
import EditBoardModal from "../EditBoardModal/EditBoardModal";
import { useDispatch } from "react-redux";
import { deleteBoard } from "../../redux/boards/operations";
import toast from "react-hot-toast";

import svg from "../../img/icons.svg";
import css from "./Board.module.css";

export default function Board({ board }) {
  const { _id, title, icon, background } = board;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const boardDeleteNotify = () =>
    toast.error(`You deleted the board ${board.title}`);

  const handleDelete = () => {
    dispatch(deleteBoard(_id));
    boardDeleteNotify();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.titleWrapper}>
        <svg className={css.titleIcon} width="18px" height="18px">
          <use href={`${svg}#${icon}`} />
        </svg>
        <h3 className={css.title}>{title}</h3>
      </div>
      <span className={css.btns}>
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
      </span>
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
    </>
  );
}
