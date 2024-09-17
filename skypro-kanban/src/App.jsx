import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 

import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFound } from './pages/404/NotFound';
import ExitPage from './pages/Exit/ExitPage';
import { auth } from './api';


function App() {
   // const isAuth = true;
   const [isAuth, setAuth] = useState(null);

   const appRoutes = {
      LOGIN: "/login",
      REGISTER: "/register",
      MAIN: "/",
      CARD: "/card/:id",
      EXIT: "/exit",
      NOT_FOUND: "*",
   }

   const navigate = useNavigate();

   const login = (e, login, password) => {
      e.preventDefault();
      auth({login, password}).then((user) => {
         setAuth(user);
         navigate(appRoutes.MAIN)
      }).catch((err) => {
         console.error(err);
         
      })
   }

   const logout = (e) => {
      e.preventDefault();
      setAuth(false);
      navigate(appRoutes.MAIN)
   }

   return ( 
   <Routes>   
      <Route element={<PrivateRoute isAuth={isAuth} />}>
         <Route path={appRoutes.MAIN} element={<MainPage isAuth = {isAuth} />}>
            <Route path={appRoutes.CARD} element={<CardPage />} />
         </Route>
    </Route>
          <Route path={appRoutes.LOGIN} element={<LoginPage login = {login} />} />
          <Route path={appRoutes.REGISTER} element={<RegisterPage register = {login}/>} />
          <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout = {logout}/>} />
   </Routes>
   );
}

export default App;
