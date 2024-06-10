import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage/LoginPage";
// import { Route, Routes } from 'react-router-dom';


export const App = () => {
  const isLoggedIn = false;
  return <>
  {isLoggedIn ? <HomePage /> : <LoginPage />}
  </>;

  

};
