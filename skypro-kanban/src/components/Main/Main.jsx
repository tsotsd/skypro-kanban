import { useEffect, useState } from "react";
import Column from "../Column/Column";
import { statusList } from "../../data";
import * as S from "./Main.styled";
import { Container } from "../shared.styled";

// import ReactDOM from 'react-dom';
// import { BrowserRouter} from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const Main = ({cardList}) => {

  const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }, []);
    
    return (   
      <S.Main>
        <Container>
          <S.MainBlock>
            <S.MainContent>
          {isLoading && `Идет загрузка...`}
          {!isLoading && statusList.map((status) => (
              <Column 
              key={status} 
              title={status}
              cardList={cardList.filter((card) => card.status === status)} /> 
          ))}
         </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main> );
}
 

export default Main;