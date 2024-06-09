import css from "../Header/Header.module.css";
import { useState } from "react";
import UserEditModal from "../UserEditModal/UserEditModal";
import ThemeModal from "../ThemeModal/ThemeModal";
import svg from "../../img/icons.svg";

export default function Header({ toggleSideBar }) {
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
        <div className={`${css.headerWrapper} ${css.container}`}>
          <header className={css.headerLayout}>
            <div>
              <div className={css.hidden}>
                <button className={css.burger} onClick={toggleSideBar}>
                  <svg width="24" height="24">
                    <use
                      href={svg + "#icon-burger-menu"}
                      stroke="currentColor"
                    ></use>
                  </svg>
                </button>
              </div>
            </div>

            <div className={css.position}>
              <div>
                <button
                  className={css.button}
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  Theme
                  <svg width="16" height="16" stroke="currentColor">
                    <use href={svg + "#chevron-down-icon"}></use>
                  </svg>
                </button>
              </div>
              {showModal && <ThemeModal closeMenuModal={closeMenuModal} />}
              <div className={css.layout}>
                <p className={css.text}>UserName</p>
                <button className={css.button} onClick={() => openModal()}>
                  <span className={`${css.avatarSmall} ${css.avatar}`} />
                </button>
              </div>
              {isModalOpen && <UserEditModal onClose={closeModal} />}
            </div>
          </header>
        </div>
      </>
    );
  }
}
