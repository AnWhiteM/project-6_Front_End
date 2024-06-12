import css from "./AddAnotherCardBtn.module.css";
import svg from "../../img/icons.svg";
import { useState } from "react";
// import { CreateCard } from "../CreateCardModal/CreateCardModal.jsx"

export const AddAnotherCardBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(true)
    }
        
    const closeModal = () => {
        setIsOpen(false)
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
    {/* {isOpen &&
        <CreateCard isOpen={isOpen} isClose={closeModal} />} */}
    </div>
  );
};
