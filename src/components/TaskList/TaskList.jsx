import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/selectors";
import { Task } from "../Task/Task";
import { fetchTasks } from "../../redux/tasks/operations";
import { useEffect } from "react";

export const TaskList = ({ column }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(column));
  }, [column, dispatch]);

  const tasks = useSelector(selectTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
