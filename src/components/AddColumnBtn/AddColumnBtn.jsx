import { CreateColumn } from "../CreateColumnModal/CreateColumnModal";
import css from "./AddColumnBtn.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";

export const AddColumnBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true)
  }
      
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className={css.openModalBtn}>
      <div className={css.iconBox}>
          <svg className={css.icon} width="14px" height="14px">
            <use href={svg + "#icon-plus"}></use>
          </svg>
      </div>
      <p className={css.text}>Add another column</p>
      </button>
      {isOpen && (
        <CreateColumn isOpen={isOpen} isClose={closeModal} />
      )}
    </>
  );
};