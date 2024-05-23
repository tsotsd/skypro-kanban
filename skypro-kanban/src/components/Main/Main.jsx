
import { useEffect, useState } from "react";
import Column from "../Column/Column";
import { statusList } from "../../data";

const Main = ({cardList}) => {

  const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }, []);
    
    return (    <main className="main">
    <div className="container">
      
      <div className="main__block">
        <div className="main__content">
          {isLoading && `Идет загрузка...`}
          {!isLoading && statusList.map((status) => (
              <Column 
              key={status} 
              title={status}
              cardList={cardList.filter((card) => card.status === status)} /> 
          ))}
        </div>
      </div>
    </div>
  </main> );
}
 

export default Main;