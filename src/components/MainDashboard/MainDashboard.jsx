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

  return (
    <div className={css.container}>
      <TaskColumn board={currentBoard} />
      <AddColumnBtn board={currentBoard} />
    </div>
  );
};
