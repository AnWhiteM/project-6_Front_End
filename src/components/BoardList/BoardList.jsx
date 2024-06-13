import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";

import css from "./BoardList.module.css";
import { useSelector } from "react-redux";
import { selectBoards } from "../../redux/boards/selectors.js";

export default function BoardList() {
  const boards = useSelector(selectBoards);

  return (
    <>
      <h3 className={css.title}>My boards</h3>
      <CreateBoardBtn />
      <ul className={css.list}>
        {boards.map((board) => (
          <li className={css.liItem} key={board._id}>
            <Board board={board} />
          </li>
        ))}
      </ul>
    </>
  );
}
