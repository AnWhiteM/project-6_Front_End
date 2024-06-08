import css from "./Layout.module.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { ScreensPage } from "../ScreensPage/ScreensPage";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.sideB}>
          <SideBar />
        </div>
        <div className={css.mainCont}>
          <div>
            <Header />
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
