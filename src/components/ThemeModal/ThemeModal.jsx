import { useDispatch, useSelector } from "react-redux";
import { sendThemeToServer } from "../../redux/theme/operation";
import { setTheme } from "../../redux/theme/slice";
import css from "../ThemeModal/ThemeModal.module.css";

export default function ThemeModal({ closeMenuModal }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
    dispatch(sendThemeToServer(selectedTheme)); 
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
