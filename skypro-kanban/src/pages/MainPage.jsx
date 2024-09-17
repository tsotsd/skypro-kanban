import '../App.css'

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
// import PopBrowse from './components/PopUps/PopBrowse/PopBrowse'
// import PopExit from './components/PopUps/PopExit/PopExit'
// import PopNewCard from './components/PopUps/PopNewCard/PopNewCard'
import { useState, useEffect } from 'react';

// import { cardList } from '../data';
import {GlobalStyle } from '../global.styled';
import {Wrapper} from '../components/shared.styled'
import { Outlet } from 'react-router-dom';
import { getTodos } from '../api';

export default function MainPage({isAuth}) {
    const [cards, setCards] = useState([]);
    
    const [isLoading, setLoading] = useState(true);
    useEffect(() => { getTodos(isAuth.token).then((tasks) => {
        console.log(tasks);
        setCards(tasks)

    }).finally(() => {
        setLoading(false)
    })
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 1000)
    }, []);

   return ( 
       <>
        <GlobalStyle/>
        <Wrapper>
            {/* <PopExit />
            <PopNewCard />
            <PopBrowse /> */}
            <Outlet />
            <Header setCards={setCards} cards={cards}/>
            <Main cardList={cards} isLoading = {isLoading} />
        </Wrapper>
        </>
   );
}


