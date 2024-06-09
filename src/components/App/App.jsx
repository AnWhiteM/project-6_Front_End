import { HomePage } from "../HomePage/HomePage";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";

export const App = () => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <HomePage /> : <WelcomeComponent />}</>;

};
