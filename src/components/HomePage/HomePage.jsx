import css from "./HomePage.module.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
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
          <div>
            <Header toggleSideBar={toggleSideBar} />
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
