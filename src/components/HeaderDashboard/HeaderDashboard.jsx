import css from "./HeaderDashboard.module.css"

export const HeaderDashboard = () => {
  return (
    <div className={css.header}>
      <h2 className={css.dashboardName}>Project office</h2>
      <button className={css.filterBtn}>Filters</button>
    </div>
  );
};
