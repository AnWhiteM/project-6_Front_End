import css from "./App.module.css";
import clsx from "clsx";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeComponent />
      </header>
    </div>
  );
};
