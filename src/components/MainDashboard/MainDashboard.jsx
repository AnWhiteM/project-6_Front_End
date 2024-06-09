import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
import { DashboardMessage } from "../DashboardMessage/DashboardMessage";
import { TaskColumn } from "../TaskColumn/TaskColumn";

export const MainDashboard = () => {
  return (
    <div>
      <DashboardMessage />
      {/* <AddColumnBtn/> */}
      <TaskColumn />
    </div>
  );
};
