import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopUps/PopBrowse/PopBrowse'
import PopExit from './components/PopUps/PopExit/PopExit'
import PopNewCard from './components/PopUps/PopNewCard/PopNewCard'
import { cardList } from './data'
import {GlobalStyle, Wrapper} from './global.styled'

export default function MainPage() {
    const [cards, setCards] = useState(cardList);
   return ( 
       <>
        <GlobalStyle/>
        <Wrapper>
            <PopExit />
            <PopNewCard />
            <PopBrowse />
            <Header setCards={setCards} cards={cards}/>
            <Main cardList={cards}/>
        </Wrapper>
        </>
   );
}


