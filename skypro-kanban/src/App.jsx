import { Routes, Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';


function App() {
   const isAuth = true;

   return ( 
   <Routes>   
      <Route element={<PrivateRoute isAuth={isAuth} />}>
         <Route path={"/"} element={<MainPage />} />
         <Route path={"/card"} element={<CardPage />} />
    </Route>
   </Routes>
   );
}

export default App;
