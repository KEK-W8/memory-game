import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";

import { setDeck, flipCard, match, notMatch } from "../redux/actions/cards";

function MainContent() {
  const dispatch = useDispatch();
  const deck = useSelector(({ cards }) => cards.deck);
  const round = Math.ceil(useSelector(({ cards }) => cards.try) / 2);

  useEffect(() => {
    dispatch(setDeck());
  }, []);

  useEffect(() => {
    let timer1 = setTimeout(() => dispatch(match()), 250);
    let timer2 = setTimeout(() => dispatch(notMatch()), 550);
    return () => {
      clearTimeout(timer1, timer2);
    };
  }, [round]);

  function handleClickCard(index) {
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
