import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";
const Column = ({ title, cardList }) => {
    return (           
    <MainColumn>
    <ColumnTitle>
      <p>{title}</p>
    </ColumnTitle>
    <Cards>
      {cardList.map(({id, topic, title, date}) => (
      <Card key={id} topic={topic} title={title} date={date} id={id} />
      ))}
      <div>
      </div>
    </Cards>
  </MainColumn>	 
  );
}

 
export default Column;