import { HomePage } from "../HomePage/HomePage";
// import SideBar from "../SideBar/SideBar";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";

export const App = () => {
  const isLoggedIn = true;

  return (
    <>
      {/* <SideBar /> */}
      {isLoggedIn ? <HomePage /> : <WelcomeComponent />}
    </>
  );

};
