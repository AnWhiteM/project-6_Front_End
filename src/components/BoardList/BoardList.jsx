import { useState, useEffect } from "react";
import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";

import css from "./BoardList.module.css";
import bgData from "../../assets/bg.json";

export default function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boardData")) || [];
    setBoards(storedBoards);
  }, []);

  const getBgById = (id) => {
    const {
      id: _,
      mini,
      mini2x,
      ...bgs
    } = bgData.find((item) => item.id === id) || {};
    return bgs;
  };

  return (
    <>
      <h3 className={css.title}>My boards</h3>

      <CreateBoardBtn />

      <ul className={css.list}>
        {boards.map((board, index) => {
          const bg = getBgById(board.background);
          return (
            <Board
              key={index}
              title={board.title}
              icon={board.icon}
              background={bg}
            />
          );
        })}
      </ul>
    </>
  );
}
