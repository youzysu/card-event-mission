import React from "react";
import { useEffect, useState } from "react";
import datas from '../src/data/cards'
import BusinessCard from '../src/components/BusinessCard'

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  function draw() {
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, "");
      console.log(typeof names)
      return alert (`당첨자는 ${names}입니다.`);
    }
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIndex]
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber))
    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]}/>}
    </div>
  )
}