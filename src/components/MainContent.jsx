import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";

import { setDeck, flipCard, matchCheck } from "../redux/actions/cards";
import { shuffledDeck } from "../data/deck";

function MainContent() {
  const dispatch = useDispatch();
  const deck = useSelector(({ cards }) => cards.deck);
  const isLoaded = useSelector(({ cards }) => cards.isLoaded);
  const gameOver = useSelector(({ cards }) => cards.gameOver);
  const round = Math.ceil(useSelector(({ cards }) => cards.try) / 2);

  useEffect(() => {
    setTimeout(() => dispatch(setDeck(shuffledDeck)), 100);
  }, [dispatch]);

  useEffect(() => {
    let timer1 = setTimeout(() => dispatch(matchCheck()), 450);
    return () => {
      clearTimeout(timer1);
    };
  }, [dispatch, round]);

  function handleClickCard(index) {
    dispatch(flipCard(index));
  }

  return (
    <div className="content-main">
      {gameOver ? (
        <h1 className="end-game">GAME OVER</h1>
      ) : (
        deck &&
        deck.map((item, index) => {
          return (
            <Card
              key={`${index}_${item.name}`}
              index={index}
              content={item.symbol}
              isFlipped={item.flipped}
              isDiscovered={item.discovered}
              isLoaded={isLoaded}
              onClickCard={handleClickCard}
            />
          );
        })
      )}
    </div>
  );
}

export default MainContent;
