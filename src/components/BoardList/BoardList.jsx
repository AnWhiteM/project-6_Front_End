import { useState, useEffect } from "react";
import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";

export default function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boardData")) || [];
    setBoards(storedBoards);
  }, []);
  return (
    <>
      <h2>My boards</h2>
      <CreateBoardBtn />
      {/* {allBoards.length !== 0 && <ButtonList />} */}
      <ul>
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
