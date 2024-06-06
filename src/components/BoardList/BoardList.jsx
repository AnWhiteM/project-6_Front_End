import { useState, useEffect } from "react";
import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";

export default function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const storedBoards = localStorage.getItem("boardData");
    if (storedBoards) {
      setBoards(JSON.parse(storedBoards));
    }
  }, []);

  return (
    <>
      <h2>My boards</h2>
      <CreateBoardBtn />
      <ul>
        {boards &&
          boards.length > 0 &&
          boards.map((board, index) => (
            <Board
              key={index}
              title={board.title}
              icon={board.icon}
              bg={board.bg}
            />
          ))}
      </ul>
    </>
  );
}
