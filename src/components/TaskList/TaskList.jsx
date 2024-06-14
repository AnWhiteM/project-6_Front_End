import { useSelector } from "react-redux"
import { selectTasks } from "../../redux/tasks/selectors"
import { Task } from "../Task/Task";

export const TaskList = () => {
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