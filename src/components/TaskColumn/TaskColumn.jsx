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
import { selectCurrentTask } from "../../redux/tasks/selectors";
import { getTask } from "../../redux/tasks/operations.js";
import { selecFilter } from "../../redux/filter/selectors.js";

export const TaskColumn = ({ board }) => {
  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);
  const currentColumn = useSelector(selectCurrentColumn);
  const currentTask = useSelector(selectCurrentTask);

  const filterPriority = useSelector(selecFilter);

  useEffect(() => {
    dispatch(getColumns(board._id));
  }, [board, dispatch, currentColumn, currentTask]);

  useEffect(() => {
    if (columns.length > 0 && !currentColumn) {
      const columnWithTasks = columns.find((column) => column.tasks.length > 0);
      dispatch(getColumn(columnWithTasks));
    }
  }, [columns, dispatch, currentColumn, currentTask]);

  useEffect(() => {
    if (currentColumn && currentColumn.tasks.length > 0 && !currentTask) {
      dispatch(
        getTask({
          deskId: currentColumn.owner,
          columnId: currentColumn._id,
          taskId: currentColumn.tasks[0]._id,
        })
      );
    }
  }, [dispatch, currentTask, currentColumn]);

  const filterByPriority = (tasks) => {
    if (filterPriority === "All") {
      return tasks;
    }
    return tasks.filter((task) => task.priority === filterPriority);
  }

  return (
    <ul className={css.ul}>
      {columns.map((column) => (
        <li className={css.li} key={column._id}>
          <TaskColumnName column={column} />
          <TaskList tasks={filterByPriority(column.tasks)} />
          <AddAnotherCardBtn column={column} />
        </li>
      ))}
    </ul>
  );
};
