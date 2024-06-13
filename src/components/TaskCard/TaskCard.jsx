import css from "./TaskCard.module.css"
import svg from "../../img/icons.svg";
import { EditCard } from "../EditCardModal/EditCardModal";
import { useState } from "react";

export const Card = () => {
  const [editCardModal, setEditCardModal] = useState(false);
  
  const openModal = () => {
    setEditCardModal(true)
  }
    
  const closeModal = () => {
    setEditCardModal(false)
  }

    return (
      <div className={css.card}>
        <div className={css.border}></div>
        <h4 className={css.title}>The Watch Spot Design</h4>
        <p className={css.desc}>
          Create a visually stunning and eye-catching watch dial design that
          embodies our brand's essence of sleek aesthetics and modern elegance.
          Your design should be unique, innovative, and reflective of the latest
          trends in watch design.
        </p>
        <hr className={css.decor}></hr>

        <div className={css.details}>
            <div className={css.wrapper}>
                <div className={css.column}>

                <p className={css.p}>Priority</p>
                <div className={css.container}>
                    <div className={css.kolo}></div>
                    <p className={css.info}>Low</p>
                </div>
                </div>

                <div className={css.column}>
                <p className={css.p}>Deadline</p>
                <p className={css.info}>12/05/2023</p>
                </div>
            </div>

          <div className={css.icons}>
            <svg className={css.bell} width="16" height="16">
                <use href={svg + "#icon-bell"}></use>
            </svg>
            
            <div className={css.btns}>
            <svg className={css.icon} width="16" height="16">
                <use href={svg + "#icon-arrow-circle"}></use>
            </svg>
            <button className={css.editModalBtn} 
            onClick={() => openModal()}
            >
              <svg className={css.icon} width="16" height="16">
                  <use href={svg + "#icon-pencil"}></use>
              </svg>
            </button>
            <svg className={css.icon} width="16" height="16">
                <use href={svg + "#icon-trash"}></use>
            </svg>
            </div>
            
          </div>

        </div>
        {editCardModal &&
        <EditCard isOpen={editCardModal} isClose={closeModal} />}
      </div>
    );
}