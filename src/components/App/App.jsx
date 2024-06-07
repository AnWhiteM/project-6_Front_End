import css from "./App.module.css";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <WelcomeComponent />
          {/* <AppBar /> */}
        </header>

        <SideBar />
        <Toaster position="top-right" />
      </div>
    </>
  );
};
