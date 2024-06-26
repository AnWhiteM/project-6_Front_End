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
import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn.jsx";
import {selectFilter} from "../../redux/filter/selectors"

export const TaskColumn = ({ board }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const currentColumn = useSelector(selectCurrentColumn);
  const currentTask = useSelector(selectCurrentTask);
  const filterPriority = useSelector(selectFilter)

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

  const savedPriority = localStorage.getItem('filter', filterPriority);
  
  const filterByPriority = (tasks) => {
    if (savedPriority === "All") {
      return tasks;
    } else if (savedPriority === null) {
      return tasks;
    } 
    return tasks.filter((task) => task.priority === savedPriority);
  }

  return (
    <ul className={css.columnWrapper}>
      {columns.map((column) => (
        <li key={column._id} className={css.columnItem}>
          <TaskColumnName column={column} />
          <div>
            <TaskList tasks={filterByPriority(column.tasks)} />
          </div>
          <AddAnotherCardBtn column={column} />
        </li>
      ))}
      <li>
        <AddColumnBtn board={board} />
      </li>
    </ul>
  );
};
