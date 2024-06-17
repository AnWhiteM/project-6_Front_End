import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn";
import { TaskColumnName } from "../TaskColumnName/TaskColumnName";
import { TaskList } from "../TaskList/TaskList";
import css from "./TaskColumn.module.css";
import { getColumn, getColumns } from "../../redux/columns/operations";
import { useEffect } from "react";
import {
  selectColumns,
  selectCurrentColumn,
} from "../../redux/columns/selectors";
import { useDispatch, useSelector } from "react-redux";

export const TaskColumn = ({ board }) => {
  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);
  const currentColumn = useSelector(selectCurrentColumn);

  useEffect(() => {
    dispatch(getColumns(board._id));
  }, [board, dispatch, currentColumn]);

  useEffect(() => {
    if (columns.length > 0 && currentColumn === null) {
      const firstColumn = columns[0];
      dispatch(getColumn(firstColumn));
    }
  }, [columns, dispatch, currentColumn]);

  return (
    <ul className={css.ul}>
      {columns.map((column) => (
        <li className={css.li} key={column._id}>
          <TaskColumnName column={column} />
          <TaskList column={column} board={board} currentColumn={currentColumn} />
          <AddAnotherCardBtn column={column} />
        </li>
      ))}
    </ul>
  );
};
