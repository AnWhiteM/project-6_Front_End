import css from "./HeaderDashboard.module.css"
import svg from "../../img/icons.svg";

export const HeaderDashboard = () => {
  return (
    <div className={css.header}>
      <h2 className={css.dashboardName}>Project office</h2>
      <button className={css.filterBtn}>
      <svg className={css.icon} width="16" height="16">
          <use href={svg + "#icon-filter"}></use>
      </svg>
      <p className={css.text}>Filters</p>
        </button>
    </div>
  );
};