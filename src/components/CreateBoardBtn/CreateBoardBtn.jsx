import { useState } from "react";
import CreateBoardForm from "../CreateBoardForm/CreateBoardForm";

export default function CreateBoardBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p>Create a new board</p>
      <button type="button" onClick={openModal}>
        <img src="../../../public/plus.png" alt="icon plus" />
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateBoardForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}
