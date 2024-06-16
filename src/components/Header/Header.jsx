import { useState } from "react";
import UserEditModal from "../UserEditModal/UserEditModal";
import ThemeModal from "../ThemeModal/ThemeModal";
import svg from "../../img/icons.svg";
import css from "../Header/Header.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function Header({ openSideBar, sideBarOpen }) {
  const user = useSelector(selectUser);

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
                {!sideBarOpen && (
                  <button className={css.burger} onClick={openSideBar}>
                    <svg width="24" height="24">
                      <use
                        href={svg + "#icon-burger-menu"}
                        stroke="currentColor"
                      ></use>
                    </svg>
                  </button>
                )}
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
                <button className={css.button} onClick={() => openModal()}>
                <p className={css.text}>{user.name}</p>
                  <span
                    className={`${css.avatarSmall} ${css.avatar}`}
                    // style={{
                    //   backgroundImage: `url(${user.avatarURL})`,
                    // }}
                    style={
                      user.avatarURL
                        ? { backgroundImage: `url(${user.avatarURL})` }
                        : {}
                    }
                  />
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
