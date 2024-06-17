// import { useSelector } from "react-redux";
// import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
// import { TaskColumn } from "../TaskColumn/TaskColumn";
// import css from "./MainDashboard.module.css";

// import {
//   selectLoading,
//   selectError,
//   selectCurrentBoard,
// } from "../../redux/boards/selectors";

// export const MainDashboard = () => {
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const currentBoard = useSelector(selectCurrentBoard);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading boards</p>;

//   const { background } = currentBoard || {};
//   const { desc, mob, tab, desc2x, mob2x, tab2x } = background || {};

//   const getBackgroundImage = () => {
//     if (
//       window.matchMedia("(min-width: 1440px) and (min-resolution: 192dpi)")
//         .matches
//     ) {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${desc2x})`;
//     } else if (window.matchMedia("(min-width: 1440px)").matches) {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${desc})`;
//     } else if (
//       window.matchMedia("(min-width: 768px) and (min-resolution: 192dpi)")
//         .matches
//     ) {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${tab2x})`;
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${tab})`;
//     } else if (window.matchMedia("(min-resolution: 192dpi)").matches) {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${mob2x})`;
//     } else {
//       return `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${mob})`;
//     }
//   };

//   return (
//       <div
//         className={css.container}
//         style={{ backgroundImage: getBackgroundImage() }}
//       >
//         <div className={css.wrapper}>
//         <TaskColumn board={currentBoard} />
//         <AddColumnBtn board={currentBoard} />
//         </div>
       
//       </div>
//   );
// };

// import { useSelector } from "react-redux";
// import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
// import { TaskColumn } from "../TaskColumn/TaskColumn";
// import css from "./MainDashboard.module.css";

// import {
//   selectLoading,
//   selectError,
//   selectCurrentBoard,
// } from "../../redux/boards/selectors";

// export const MainDashboard = () => {
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const currentBoard = useSelector(selectCurrentBoard);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading boards</p>;

//   const { background } = currentBoard || {};
//   const { desc, mob, tab, desc2x, mob2x, tab2x } = background || {};

//   const getBackgroundImage = () => {
//     const isDefaultBg = background.id === 1; // Assuming id 1 is the default background
//     if (
//       window.matchMedia("(min-width: 1440px) and (min-resolution: 192dpi)")
//         .matches
//     ) {
//       return isDefaultBg ? `url(${desc2x})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${desc2x})`;
//     } else if (window.matchMedia("(min-width: 1440px)").matches) {
//       return isDefaultBg ? `url(${desc})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${desc})`;
//     } else if (
//       window.matchMedia("(min-width: 768px) and (min-resolution: 192dpi)")
//         .matches
//     ) {
//       return isDefaultBg ? `url(${tab2x})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${tab2x})`;
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//       return isDefaultBg ? `url(${tab})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${tab})`;
//     } else if (window.matchMedia("(min-resolution: 192dpi)").matches) {
//       return isDefaultBg ? `url(${mob2x})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${mob2x})`;
//     } else {
//       return isDefaultBg ? `url(${mob})` : `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url(${mob})`;
//     }
//   };

//   return (
//       <div
//         className={css.container}
//         style={{ backgroundImage: getBackgroundImage() }}
//       >
//         <div className={css.wrapper}>
//         <TaskColumn board={currentBoard} />
//         <AddColumnBtn board={currentBoard} />
//         </div>
//       </div>
//   );
// };

import { useSelector } from "react-redux";
import { AddColumnBtn } from "../AddColumnBtn/AddColumnBtn";
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
  console.log(background);

  // const isEmptyObject = (obj) => {
  //   return Object.keys(obj).length === 0 && obj.constructor === Object;
  // };

  const getBackgroundStyle = () => {
    if (!('mob' in background)) {
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
        <AddColumnBtn board={currentBoard} />
      </div>
    </div>
  );
};