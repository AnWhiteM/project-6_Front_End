import { useState } from "react";
import EditBoardModal from "../EditBoardModal/EditBoardModal";

import svg from "../../img/icons.svg";
import css from "./Board.module.css";

export default function Board({ title, icon, background }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // local storage - start - тут буде dispatch
  const deleteHandler = () => {
    const storedData = JSON.parse(localStorage.getItem("boardData"));
    const updatedData = storedData.filter((board) => board.title !== title);
    localStorage.setItem("boardData", JSON.stringify(updatedData));
  };
  // / local storage - start

  return (
    <li className={css.liItem}>
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
        <button className={css.btn} type="button" onClick={deleteHandler}>
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
          background={background}
        />
      )}
    </li>
  );
}
