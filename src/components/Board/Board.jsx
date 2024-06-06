import { useState } from "react";
import EditBoardModal from "../EditBoardModal/EditBoardModal";

import svg from "../../img/icons.svg";
import css from "./Board.module.css";

export default function Board({ title, icon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li>
      <div>
        <svg width="24px" height="24px">
          <use href={`${svg}#${icon}`} />
        </svg>
      </div>
      <h3>{title}</h3>
      <button type="button" onClick={openModal}>
        <svg className={css.icon} width="20px" height="20px">
          <use href={svg + "#icon-pencil"}></use>
        </svg>
      </button>
      {isModalOpen && (
        <EditBoardModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </li>
  );
}
