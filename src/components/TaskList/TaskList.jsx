import { Task } from "../Task/Task";

export const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
