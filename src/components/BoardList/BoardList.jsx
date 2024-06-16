import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";
import Board from "../Board/Board";
import css from "./BoardList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectBoards } from "../../redux/boards/selectors.js";
import { currentBoard } from "../../redux/boards/operations.js";
import { useNavigate } from "react-router-dom";

export default function BoardList() {
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBoardClick = async (boardId) => {
    // dispatch(setCurrentBoardId(boardId));

    await dispatch(currentBoard(boardId)).unwrap();
    navigate(`/home/${boardId}`);
  };

  return (
    <>
      <h3 className={css.title}>My boards</h3>
      <CreateBoardBtn />
      <nav>
        <ul className={css.list}>
          {boards.map((board) => (
            <li
              className={css.liItem}
              key={board._id}
              onClick={() => handleBoardClick(board._id)}
            >
              <Board board={board} allBoards={boards} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
