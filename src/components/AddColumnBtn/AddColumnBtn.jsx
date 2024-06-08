import { CreateColumn } from "../CreateColumn/CreateColumn";
import css from "./AddColumnBtn.module.css";
import { useState } from "react";

export const AddColumnBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openColumnCreateModal() {
    setIsOpen(true)
  }

  function closeColumnCreateModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button className={css.btn} onClick={openColumnCreateModal}>Add another column</button>
      <CreateColumn isOpen={isOpen} isClose={closeColumnCreateModal} />
    </div>
  );
};