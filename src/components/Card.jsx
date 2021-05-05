import React from "react";

function Card({ index, isFlipped, onClickCard, content }) {
  return (
    <div
      className={`content-main-card ${isFlipped ? "flipped" : ""} `}
      onClick={() => onClickCard(index)}
    >
      {isFlipped ? content : ""}
    </div>
  );
}

export default Card;
