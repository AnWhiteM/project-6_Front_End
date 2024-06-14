import { CreateColumn } from "../CreateColumnModal/CreateColumnModal";
import css from "./AddColumnBtn.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";

export const AddColumnBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openColumnCreateModal() {
    setIsOpen(true)
  }

  function closeColumnCreateModal() {
    setIsOpen(false)
  }

  return (
    <div className={css.btn} onClick={openColumnCreateModal}>
      <div className={css.iconBox}>
          <svg className={css.icon} width="14px" height="14px">
            <use href={svg + "#icon-plus"}></use>
          </svg>
      </div>
      <p className={css.text}>Add another column</p>
      {isOpen && (
        <CreateColumn isOpen={isOpen} isClose={closeColumnCreateModal} />
      )}
    </div>
  );
};