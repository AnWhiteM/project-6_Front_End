import css from "./HomePage.module.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export const HomePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      <div className={css.container}>
        {sideBarOpen && (
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
