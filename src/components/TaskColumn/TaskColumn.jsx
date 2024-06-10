import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn";
import { Card } from "../TaskCard/TaskCard";
import { TaskColumnName } from "../TaskColumnName/TaskColumnName";

export const TaskColumn = () => {
    return (
      <div>
        <TaskColumnName />
        <Card />
        <AddAnotherCardBtn />
      </div>
    );
  };