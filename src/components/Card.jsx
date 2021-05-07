import React from "react";

function Card({ index, isFlipped, isDiscovered, onClickCard, content }) {
  return (
    <div
      className={`content-main-card 
      ${isFlipped || isDiscovered ? "flipped" : ""} ${
        isDiscovered ? "discovered" : ""
      }`}
      onClick={isFlipped || isDiscovered ? null : () => onClickCard(index)}
    >
      {isFlipped || isDiscovered ? content : ""}
    </div>
  );
}

export default Card;
