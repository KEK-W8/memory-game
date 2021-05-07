import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";

import { setDeck, flipCard, restart, keepClose } from "../redux/actions/cards";

const figures = [
  { id: 1, name: "worm", symbol: "🪱", flipped: false, discovered: false },
  { id: 2, name: "orangutan", symbol: "🦧", flipped: false, discovered: false },
  { id: 3, name: "kangaroo", symbol: "🦘", flipped: false, discovered: false },
  { id: 4, name: "bison", symbol: "🦬", flipped: false, discovered: false },
  { id: 5, name: "flamingo", symbol: "🦩", flipped: false, discovered: false },
  { id: 6, name: "otter", symbol: "🦦", flipped: false, discovered: false },
  { id: 7, name: "eagle", symbol: "🦅", flipped: false, discovered: false },
  { id: 8, name: "scorpion", symbol: "🦂", flipped: false, discovered: false },
];

const shuffledDeck = figures.concat(figures).sort(() => Math.random() - 0.5);

function MainContent() {
  const dispatch = useDispatch();
  const deck = useSelector(({ cards }) => cards.deck);
  const round = Math.ceil(useSelector(({ cards }) => cards.try) / 2);

  useEffect(() => {
    dispatch(setDeck(shuffledDeck));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(keepClose());
  // }, [match]);

  function handleClickCard(index) {
    dispatch(flipCard(index));
  }

  return (
    <div className="content-main">
      {round}
      {deck &&
        deck.map((cardObj, index) => {
          return (
            <Card
              key={`${index}_${cardObj.name}`}
              content={cardObj.symbol}
              isFlipped={cardObj.flipped}
              isDiscovered={cardObj.discovered}
              index={index}
              onClickCard={handleClickCard}
            />
          );
        })}
    </div>
  );
}

export default MainContent;
