import { useDispatch, useSelector } from "react-redux";
import { selectCurrentTask, selectTasks } from "../../redux/tasks/selectors";
import { Task } from "../Task/Task";
import { fetchTasks, getTask } from "../../redux/tasks/operations";
import { useEffect } from "react";

export const TaskList = ({ column, board}) => {
  const dispatch = useDispatch()
  const currentTask = useSelector(selectCurrentTask);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks(column));
  }, [column, dispatch, board, currentTask])

  useEffect(() => {
    if (column.tasks.length > 0 && currentTask === null) {
      dispatch(getTask({
        deskId: board._id,
        columnId: column._id,
        taskId: column.tasks[0]._id
      }))
    } 
  }, [dispatch, currentTask, column, board])

  const filteredTasks = tasks.filter(task => task.owner === column._id);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task._id}>
          <Task task={task} column={column} />
        </li>
      ))}
    </ul>
  );
};
