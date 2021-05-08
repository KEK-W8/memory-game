import React from "react";

function Card({
  index,
  content,
  isFlipped,
  isDiscovered,
  onClickCard,
  isLoaded,
}) {
  const faceUp = isFlipped || isDiscovered;

  return (
    <div
      className={`content-main-card 
      ${faceUp ? "flipped" : ""} 
      ${isDiscovered ? "discovered" : ""}`}
      onClick={!isLoaded || faceUp ? null : () => onClickCard(index)}
    >
      {faceUp ? content : ""}
    </div>
  );
}

export default Card;
