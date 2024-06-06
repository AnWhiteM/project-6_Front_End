import css from "../Header/Header.module.css";
import { useState } from "react";
import UserEditModal from "../UserEditModal/UserEditModal";
import ThemeModal from "../ThemeModal/ThemeModal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenuModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  {
    return (
      <>
        <div className={css.headerWrapper}>
          <header className={css.headerLayout}>
            <div>
              <button
                className={css.button}
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Theme
                <svg width="16" height="16" stroke="currentColor">
                  <use href="/src/img/icons.svg#chevron-down-icon"></use>
                </svg>
              </button>
            </div>
            {showModal && <ThemeModal closeMenuModal={closeMenuModal} />}

            <div className={css.layout}>
              <p>UserName</p>
              <button className={css.button} onClick={() => openModal()}>
                <span className={`${css.avatarSmall} ${css.avatar}`} />
              </button>
            </div>
            {isModalOpen && <UserEditModal onClose={closeModal} />}
          </header>
        </div>
      </>
    );
  }
}

//  <img src="/src/img/user.jpg" alt="default photo" width="32" height="32" className={css.avatar} />;
