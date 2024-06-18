import { useSelector } from "react-redux";
import { TaskColumn } from "../TaskColumn/TaskColumn";
import css from "./MainDashboard.module.css";

import {
  selectLoading,
  selectError,
  selectCurrentBoard,
} from "../../redux/boards/selectors";

export const MainDashboard = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentBoard = useSelector(selectCurrentBoard);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading boards</p>;

  const { background } = currentBoard || {};

  const getBackgroundStyle = () => {
    if (!('mob' in background) && !('desc' in background) && !('tab' in background)) {
      return { backgroundColor: "#1F1F1F" };
    }

    const { desc, mob, tab, desc2x, mob2x, tab2x } = background;

    const linearGradient = 'linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7))';

    if (window.matchMedia("(min-width: 1440px) and (min-resolution: 192dpi)").matches) {
      return { backgroundImage: `${linearGradient}, url(${desc2x})` };
    } else if (window.matchMedia("(min-width: 1440px)").matches) {
      return { backgroundImage: `${linearGradient}, url(${desc})` };
    } else if (window.matchMedia("(min-width: 768px) and (min-resolution: 192dpi)").matches) {
      return { backgroundImage: `${linearGradient}, url(${tab2x})` };
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return { backgroundImage: `${linearGradient}, url(${tab})` };
    } else if (window.matchMedia("(min-resolution: 192dpi)").matches) {
      return { backgroundImage: `${linearGradient}, url(${mob2x})` };
    } else {
      return { backgroundImage: `${linearGradient}, url(${mob})` };
    }
  };

  return (
    <div
      className={css.container}
      style={getBackgroundStyle()}
    >
      <div className={css.wrapper}>
        <TaskColumn board={currentBoard} />
      </div>
    </div>
  );
};