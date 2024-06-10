import { useState } from "react";
import css from "./DashboardMessage.module.css"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";

export const DashboardMessage = () => {
const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.container}>
      <p className={css.text}>
        Before starting your project, it is essential{" "}
        <a className={css.link} onClick={openModal}>
          to create a board
        </a>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>

      {isModalOpen && (
      <CreateBoardModal isOpen={isModalOpen} onClose={closeModal}/>
    )}
    </div>
  );
};