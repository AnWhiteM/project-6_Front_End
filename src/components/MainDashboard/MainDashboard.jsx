import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { DashboardMessage } from "../DashboardMessage/DashboardMessage";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import { Card } from "../TaskCard/TaskCard"
import css from "./MainDashboard.module.css"

export const MainDashboard = () => {
  return (
    <div className={css.container}>
        {/* <Card/> */}
      <DashboardMessage />
      {/* <AddColumnBtn/> */}
      {/* <TaskColumn /> */}
    </div>
  );
};
