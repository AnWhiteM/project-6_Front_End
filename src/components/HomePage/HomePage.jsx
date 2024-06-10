import css from "./HomePage.module.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import clsx from "clsx";

export const HomePage = () => {
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
        {(screenSize.width >= 1440 || sideBarOpen) && (
          <div className={css.sideB}>
            <SideBar />
          </div>
        )}

        <div className={css.mainCont}>
          {sideBarOpen && (
            <div className={css.overlay} onClick={closeSideBar}></div>
          )}
          <div>
            <Header openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
          </div>
          <div>
            <ScreensPage />
          </div>
        </div>
        <Toaster position="top-right" />
      </div>
    </>
  );
};
