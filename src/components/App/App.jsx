import { HomePage } from "../HomePage/HomePage";
import { LoginPage } from "../LoginPage/LoginPage";
import { Route, Routes } from 'react-router-dom';
import Login from "../Login/Login";
import Register from "../Register/Register";


export const App = () => {
  
  return (
  <>
  <Routes>
        <Route path="/welcome" element={<LoginPage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
    </Routes>
  
  </>
  )
  

};
