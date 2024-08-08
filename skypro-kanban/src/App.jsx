import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 

import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import { useState } from 'react';


function App() {
   // const isAuth = true;
   const [isAuth, setState] = useState(true);

   const appRoutes = {
      LOGIN: "/login",
      REGISTER: "/register",
      MAIN: "/",
      CARD: "/card/:id",
      EXIT: "/exit",
      NOT_FOUND: "*",
   }

   return ( 
   <Routes>   
      <Route element={<PrivateRoute isAuth={isAuth} />}>
         <Route path={appRoutes.MAIN} element={<MainPage />} />
         <Route path={appRoutes.CARD} element={<CardPage />} />
    </Route>
   
          <Route path={"/login"} element={<LoginPage />} />

   </Routes>
   );
}

export default App;
