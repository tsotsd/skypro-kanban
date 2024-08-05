import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopUps/PopBrowse/PopBrowse'
import PopExit from './components/PopUps/PopExit/PopExit'
import PopNewCard from './components/PopUps/PopNewCard/PopNewCard'
import { cardList } from './data'
import {GlobalStyle} from './global.styled'
import { Routes, Route } from 'react-router-dom';


function App() {
   const [cards, setCards] = useState(cardList);
   return ( 
   <Routes>   
   <GlobalStyle/>
   <div className="wrapper">
    <PopExit />
    <PopNewCard />
    <PopBrowse />
    <Header setCards={setCards} cards={cards}/>
    <Main cardList={cards}/>
   </div>
   </Routes>
   );
}


export default App
