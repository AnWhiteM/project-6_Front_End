import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage/LoginPage";
import { Route, Routes } from 'react-router-dom';
import Login from "../../Login/Login";
import Register from "../Register/Register";

export const App = () => {
  const isLoggedIn = false;
  return <>
  {isLoggedIn ? <HomePage /> : <LoginPage />}
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>   
        <Route path="/home" element={<HomePage />}/>
      </Routes>
  </>;

  

};
