import { useState } from "react";
import * as S from "./Header.styled"
import { Container } from "../shared.styled";
import { Link } from "react-router-dom";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onAddCard = () => {
    const newCard = {
      id: Date.now(),
      title: "TEST",
      topic: "Research",
      date: "12.05.2024",
      status: "Без статуса",
    }
    const newCardList = [...cards, newCard]
    setCards(newCardList);
  }
  return (
    <S.Header>
    <Container>
      <S.HeaderBlock>
        <S.HeaderLogo>
          <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
        </S.HeaderLogo>

        {/* <div className="header__logo _dark">
          <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
        </div> */}
        
        <nav className="header__nav">
          
          <S.HeaderButton onClick={onAddCard}>Создать новую задачу</S.HeaderButton>
          
          <S.HeaderUser onClick={handleOpen}>Ivan Ivanov</S.HeaderUser>
      
          {isOpen && (          
            <div className="header__pop-user-set pop-user-set">
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
              <p>Темная тема</p>
              <input type="checkbox" className="checkbox" name="checkbox" />
            </div>
            <button type="button" className="_hover03"><Link to="/exit">Выйти</Link></button>
          </div>
        )}
        </nav>					
        </S.HeaderBlock>
        </Container>
    </S.Header>)			
}
 

export default Header;