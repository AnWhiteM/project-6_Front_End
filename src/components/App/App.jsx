import { Layout } from "../Layout/Layout";
import { WelcomeComponent } from "../WelcomeComponent/WelcomeComponent";

export const App = () => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <Layout /> : <WelcomeComponent />}</>;
};
