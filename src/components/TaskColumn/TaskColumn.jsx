import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn";
import { TaskColumnName } from "../TaskColumnName/TaskColumnName";

export const TaskColumn = () => {
    return (
      <div>
        <TaskColumnName />
        {/* TaskCard Diana */}
        <AddAnotherCardBtn />
      </div>
    );
  };