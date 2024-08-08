import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 

import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

   const login = () => {
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
          <Route path={"/login"} element={<LoginPage login = {login} />} />

   </Routes>
   );
}

export default App;
