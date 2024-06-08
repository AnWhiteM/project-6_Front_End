import { useState, useEffect } from "react";
import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";

import css from "./BoardList.module.css";

export default function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boardData")) || [];
    setBoards(storedBoards);
  }, []);
  return (
    <>
      <h3 className={css.title}>My boards</h3>

      <CreateBoardBtn />

      <ul className={css.list}>
        {boards.map((board, index) => (
          <Board
            key={index}
            title={board.title}
            icon={board.icon}
            background={board.background}
          />
        ))}
      </ul>
    </>
  );
}
