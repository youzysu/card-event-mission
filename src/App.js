import { useEffect, useState } from "react";
import Cards from "./cards.js";

function App() {
  const [cardList, setCardList] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [selectList, setSelectList] = useState([]);
  const selectCard = () => {
    setSelectedCard(cardList[Math.floor(Math.random() * cardList.length)]);
    setCardList(cardList.filter((card) => card.name !== selectedCard.name))
    setSelectList((pre) => [selectedCard, ...pre])
  }
  if (selectList.length === 3) {
    window.alert(`이미 3명의 추첨을 완료했습니다. 당첨자는 ${selectList.map(({name}) => ([name]))}입니다.`);
  };

  useEffect(() => {
    setCardList(Cards);
  }, [])

  return (
    <div>
      <button onClick={selectCard}>추첨하기</button>
      { selectedCard === undefined ? "" : (
        <div>
          <h3>{selectedCard.name}</h3>
          <h4>{selectedCard.company} {selectedCard.team}</h4>
          <h4>{selectedCard.phoneNumber} {selectedCard.email}</h4>
        </div>
      )}
    </div>
  );
}

export default App;