import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = ({ tasks }) => {
  return (
    <ul className={css.taskList}>
      {tasks.map((task) => (
        <li key={task._id} className={css.taskItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
