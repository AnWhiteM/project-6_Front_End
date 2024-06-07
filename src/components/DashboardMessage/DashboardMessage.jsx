import css from "./DashboardMessage.module.css"

export const DashboardMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Before starting your project, it is essential{" "}
        <a href="" className={css.link}>
          to create a board
        </a>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};