import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { DashboardMessage } from "../DashboardMessage/DashboardMessage";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import css from "./MainDashboard.module.css"

export const MainDashboard = () => {
  return (
    <div className={css.container}>
      {/* <DashboardMessage /> */}
      {/* <AddColumnBtn/> */}
      <TaskColumn />
    </div>
  );
};
