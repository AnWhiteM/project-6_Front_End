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
    <li>
      <div>
        <svg width="24px" height="24px">
          <use href={`${svg}#${icon}`} />
        </svg>
      </div>
      <h3>{title}</h3>
      <button type="button" onClick={openModal}>
        <svg className={css.icon} width="16px" height="16px">
          <use href={svg + "#icon-pencil"}></use>
        </svg>
      </button>
      <button type="button" onClick={deleteHandler}>
        <svg className={css.icon} width="16px" height="16px">
          <use href={svg + "#icon-trash"}></use>
        </svg>
      </button>
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
