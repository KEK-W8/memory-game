import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";

import { setDeck, flipCard } from "../redux/actions/cards";

function MainContent() {
  const dispatch = useDispatch();
  const deck = useSelector(({ cards }) => cards.deck);

  useEffect(() => {
    dispatch(setDeck());
  }, []);

  function handleClickCard(index) {
    console.log(`from react ${index}`);
    dispatch(flipCard(index));
  }

  return (
    <div className="content-main">
      {deck &&
        deck.map((cardObj, index) => {
          return (
            <Card
              key={`${index}_${cardObj.name}`}
              content={cardObj.symbol}
              isFlipped={cardObj.flipped}
              index={index}
              onClickCard={handleClickCard}
            />
          );
        })}
    </div>
  );
}

export default MainContent;
