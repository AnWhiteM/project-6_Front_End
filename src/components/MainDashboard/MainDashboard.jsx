import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import css from "./MainDashboard.module.css";

export const MainDashboard = ({ board }) => {

    return (
        <div className={css.container}>
            <div className={css.dashContainer}>
                {board.columns && board.columns.map(column => (
                    <TaskColumn key={column.id} column={column} />
                ))}
                <AddColumnBtn />
            </div>
        </div>
    );
};

