// import { useState, useEffect } from "react";
// import axios from "axios";
// import css from "../ThemeModal/ThemeModal.module.css";

// export default function ThemeModal({ closeMenuModal }) {
//   const getInitialTheme = () => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme ? savedTheme : "dark";
//   };

//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     document.body.className = `${theme}-theme`;
//     sendThemeToServer(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleThemeChange = (selectedTheme) => {
//     setTheme(selectedTheme);
//   };

//   // const sendThemeToServer = async (theme) => {
//   //   try {
//   //     const response = await axios.put('/users/theme', { theme });

//   //     if (response.status !== 200) {
//   //       throw new Error('Network response was not ok');
//   //     }

//   //   } catch (error) {
//   //     // console.error('Error updating theme:', error);
//   //   }
//   // };

//   const getBtnClassName = (selectedColor) => {
//     return `${css.btn} ${css.transition} ${
//       theme === selectedColor ? css.btnActive : css.btnInactive
//     }`;
//   };

//   const handleMenuClick = (ev) => {
//     ev.stopPropagation();
//   };

//   return (
//     <div className={css.backdrop} onClick={() => closeMenuModal()}>
//       <div className={css.themeModal} onClick={handleMenuClick}>
//         <ul className={css.list}>
//           <li>
//             <button
//               className={getBtnClassName("light")}
//               onClick={() => handleThemeChange("light")}
//             >
//               Light
//             </button>
//           </li>
//           <li>
//             <button
//               className={getBtnClassName("dark")}
//               onClick={() => handleThemeChange("dark")}
//             >
//               Dark
//             </button>
//           </li>
//           <li>
//             <button
//               className={getBtnClassName("violet")}
//               onClick={() => handleThemeChange("violet")}
//             >
//               Violet
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendThemeToServer } from "../../redux/theme/operation";
import { setTheme } from "../../redux/theme/slice";
import css from "../ThemeModal/ThemeModal.module.css";

export default function ThemeModal({ closeMenuModal }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  console.log("theme:" ,theme);

  useEffect(() => {
    if (theme) {
      document.body.className = `${theme}-theme`;
      localStorage.setItem("theme", theme); // Збереження теми в локальному сховищі
    }
  }, [theme]);

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
    dispatch(sendThemeToServer(selectedTheme)); // Відправка теми на сервер
  };

  const getBtnClassName = (selectedColor) => {
    return `${css.btn} ${css.transition} ${
      theme === selectedColor ? css.btnActive : css.btnInactive
    }`;
  };

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  return (
    <div className={css.backdrop} onClick={() => closeMenuModal()}>
      <div className={css.themeModal} onClick={handleMenuClick}>
        <ul className={css.list}>
          <li>
            <button
              className={getBtnClassName("light")}
              onClick={() => handleThemeChange("light")}
            >
              Light
            </button>
          </li>
          <li>
            <button
              className={getBtnClassName("dark")}
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </button>
          </li>
          <li>
            <button
              className={getBtnClassName("violet")}
              onClick={() => handleThemeChange("violet")}
            >
              Violet
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
