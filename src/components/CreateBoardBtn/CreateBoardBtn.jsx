import { useState } from "react";
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";
import svg from "../../img/icons.svg";
import css from "./CreateBoardBtn.module.css";

export default function CreateBoardBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.container}>
      <p className={css.text}> Create a new board</p>
      <button className={css.button} type="button" onClick={openModal}>
        <svg className={css.icon} width="20px" height="20px">
          <use href={svg + "#icon-plus"}></use>
        </svg>
      </button>

      {isModalOpen && (
        <CreateBoardModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
