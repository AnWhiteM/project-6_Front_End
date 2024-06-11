import css from "./HomePage.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

import { ScreensPage } from "../../components/ScreensPage/ScreensPage";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  const openSideBar = () => {
    if (!sideBarOpen) {
      setSideBarOpen(true);
    }
  };

  const closeSideBar = () => {
    if (sideBarOpen) {
      setSideBarOpen(false);
    }
  };

  const resizeHandler = () => {
    setScreenSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <div className={css.container}>
        {screenSize.width >= 1440 && (
          <div className={css.sideB}>
            <SideBar />
          </div>
        )}

        <div className={css.mainCont}>
          {screenSize.width < 1440 && sideBarOpen && (
            <>
              <div className={css.overlay} onClick={closeSideBar}></div>
              <div className={css.sideBfixed}>
                <SideBar />
              </div>
            </>
          )}
          <div>
            <Header openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
          </div>
          <div>
            <ScreensPage className={css.screen} />
          </div>
        </div>
      </div>
    </>
  );
}
