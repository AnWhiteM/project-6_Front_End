import { useState } from "react";
import css from "../ThemeModal/ThemeModal.module.css";

export default function ThemeModal({ closeMenuModal }) {
  const [theme, setTheme] = useState("Light");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const getBtnClassName = (selectedColor) => {
    return `${css.btn} ${css.transition} ${
      theme === selectedColor ? css.btnActive : css.btnInactive
    }`;
  };

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  {
    return (
      <>
        <div className={css.backdrop} onClick={() => closeMenuModal()}>
          <div className={css.themeModal} onClick={(e) => handleMenuClick(e)}>
            <ul className={css.list}>
              <li>
                <button
                  className={getBtnClassName("Light")}
                  onClick={() => handleThemeChange("Light")}
                >
                  Light
                </button>
              </li>
              <li>
                <button
                  className={getBtnClassName("Dark")}
                  onClick={() => handleThemeChange("Dark")}
                >
                  Dark
                </button>
              </li>
              <li>
                <button
                  className={getBtnClassName("Violet")}
                  onClick={() => handleThemeChange("Violet")}
                >
                  Violet
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
