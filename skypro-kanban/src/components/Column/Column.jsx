import Card from "../Card/Card";
import { ColumnTitle } from "./Column.styled";
const Column = ({ title, cardList }) => {
    return (           
    <div className="main__column column">
    <ColumnTitle>
      <p>{title}</p>
    </ColumnTitle>
    <div className="cards">
      {cardList.map(({id, topic, title, date}) => (
      <Card key={id} topic={topic} title={title} date={date} />
      ))}
      <div>
      </div>
    </div>
  </div>	 
  );
}

 
export default Column;