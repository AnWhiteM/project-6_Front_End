import { useState } from "react";
import svg from "../../img/icons.svg";
import ModalHelp from "../ModalHelp/ModalHelp";
import css from "./HelpBlock.module.css";

export default function HelpBlock() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.container}>
      <div>
        <img
          className={css.img}
          src="../../../public/1x-sidebar-plant.png"
          alt="Kaktus"
        />
      </div>
      <div>
        <p className={css.text}>
          If you need help with{" "}
          <span>
            <a className={css.colorLogo} href="">
              TaskPro
            </a>
          </span>
          , check out our support resources or reach out to our customer support
          team.
        </p>
      </div>
      <div className={css.containerIcon}>
        <svg className={css.icon} width="20px" height="20px">
          <use className={css.icon} href={svg + "#icon-arrow-right"}></use>
        </svg>
        <p className={css.textHelp} onClick={openModal}>
          Need help?
        </p>
        {modalOpen && <ModalHelp isOpen={modalOpen} closeModal={closeModal} />}
      </div>
    </div>
  );
}
