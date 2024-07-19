import { useState } from "react";
import * as S from "./header.styled"
import { Container } from "../shared.styled";

const Header = ({ setCards, cards }) => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onAddCadr = () => {
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
          
          <button className="header__btn-main-new _hover01" onClick={onAddCadr}>Создать новую задачу</button>
          <div className="header__user _hover02" onClick={handleOpen}>Ivan Ivanov</div>
      
          {isOpen && (          
            <div className="header__pop-user-set4 pop-user-set">
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
              <p>Темная тема</p>
              <input type="checkbox" className="checkbox" name="checkbox" />
            </div>
            <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
          </div>
        )}
        </nav>					
        </S.HeaderBlock>
        </Container>
    </S.Header>)			
}
 

export default Header;