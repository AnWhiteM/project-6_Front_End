import css from "./AddAnotherCardBtn.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";
import { CreateCard } from "../CreateCardModal/CreateCardModal.jsx"

export const AddAnotherCardBtn = () => {
    const [createCardModal, setCreateCardModal] = useState(false)
    
    const openModal = () => {
      setCreateCardModal(true)
    }
        
    const closeModal = () => {
      setCreateCardModal(false)
    }
    
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={openModal}>
        <div className={css.iconBox}>
          <svg className={css.icon} width="14px" height="14px">
            <use href={svg + "#icon-plus"}></use>
          </svg>
        </div>
        Add another card
      </button>
    {createCardModal &&
        <CreateCard isOpen={createCardModal} isClose={closeModal} />}
    </div>
  );
};
