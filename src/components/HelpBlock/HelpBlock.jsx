import { useState } from "react";
import ModalHelp from "../ModalHelp/ModalHelp";

export default function HelpBlock() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <img src="../../img/1x-sidebar-plant.png" alt="Kaktus" />
      </div>
      <div>
        <p>
          If you need help with
          <span>
            <a href=""> TaskPro</a>
          </span>
          , check out our support resources or reach out to our customer support
          team.
        </p>
      </div>
      <div>
        <svg>
          <use href="../../img/icons.svg/icon-arrow-circle"></use>
        </svg>
        <p onClick={openModal}>Need help?</p>
        {modalOpen && <ModalHelp isOpen={modalOpen} closeModal={closeModal} />}
      </div>
    </div>
  );
}
