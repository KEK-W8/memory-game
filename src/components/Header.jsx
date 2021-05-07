import React from "react";

function Header() {
  return (
    <div className="content-header">
      <div className="content-header-rounds">Round: 1</div>
      <div className="content-header-restart">
        <strong>
          Победа! <button className="button">Restart</button>
        </strong>
      </div>
    </div>
  );
}

export default Header;
