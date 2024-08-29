import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 

import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFound } from './pages/404/NotFound';


function App() {
   // const isAuth = true;
   const [isAuth, setAuth] = useState(false);

   const appRoutes = {
      LOGIN: "/login",
      REGISTER: "/register",
      MAIN: "/",
      CARD: "/card/:id",
      EXIT: "/exit",
      NOT_FOUND: "*",
   }

   const navigate = useNavigate();

   const login = (e) => {
      e.preventDefault();
      setAuth(true);
      navigate(appRoutes.MAIN)
   }

   return ( 
   <Routes>   
      <Route element={<PrivateRoute isAuth={isAuth} />}>
         <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={appRoutes.CARD} element={<CardPage />} />
         </Route>
    </Route>
          <Route path={appRoutes.LOGIN} element={<LoginPage login = {login} />} />
          <Route path={appRoutes.REGISTER} element={<RegisterPage register = {login}/>} />
          <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />

   </Routes>
   );
}

export default App;
