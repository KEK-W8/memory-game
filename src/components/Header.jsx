import React from "react";

import { useSelector } from "react-redux";

function Header() {
  const round = Math.ceil(useSelector(({ cards }) => cards.try) / 2);

  return (
    <div className="header">
      <h3>Round: {round}</h3>
      <button
        className="button"
        onClick={() => {
          window.location.reload();
        }}
      >
        <strong>Restart</strong>
      </button>
    </div>
  );
}

export default Header;
