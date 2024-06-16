import { useSelector } from "react-redux";
import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import css from "./MainDashboard.module.css";

import {
  selectLoading,
  selectError,
  selectCurrentBoard,
} from "../../redux/boards/selectors";

export const MainDashboard = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentBoard = useSelector(selectCurrentBoard);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading boards</p>;

  const backgroundStyle = currentBoard?.background?.desc
    ? {
        backgroundImage: `url(${currentBoard.background.desc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: "#1F1F1F" };
  return (
    <div className={css.container} style={backgroundStyle}>
      <TaskColumn board={currentBoard} />
      <AddColumnBtn board={currentBoard} />
    </div>
  );
};
