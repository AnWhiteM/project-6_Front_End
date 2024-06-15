import { AddAnotherCardBtn } from "../AddAnotherCardBtn/AddAnotherCardBtn";
import { TaskColumnName } from "../TaskColumnName/TaskColumnName";
import { TaskList } from "../TaskList/TaskList";
import css from "./TaskColumn.module.css"

export const TaskColumn = ({columns}) => {
    return (
      <ul className={css.ul}>
        {columns.map((column) => (
          <li className={css.li} key={column._id}>
          <TaskColumnName column={column} />
          <TaskList column={column} />
          <AddAnotherCardBtn column={column} />
        </li>
        )
        )}
      </ul> 
    );
  };