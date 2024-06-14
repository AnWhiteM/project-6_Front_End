import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn";
import { Task } from "../Task/Task";
import { TaskColumnName } from "../TaskColumnName/TaskColumnName";
import { TaskList } from "../TaskList/TaskList";

export const TaskColumn = () => {
    return (
      <div>
        <TaskColumnName />
        {/* <Task /> */}
        <TaskList/>
        <AddAnotherCardBtn />
      </div>
    );
  };