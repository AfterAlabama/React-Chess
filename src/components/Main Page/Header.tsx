import React, { FC } from "react";
import { HeaderProps } from "../../helpers/Props";

const Header: FC<HeaderProps> = ({ clickHandler }) => {
  return (
    <header className="header">
      <div id="header-image"></div>
      <div className="header-content">
        <h1>Games For Everyone!</h1>
        <p>Wish to play a game? Choose which:</p>
        <button className="btn" onClick={clickHandler}>
          Games
        </button>
      </div>
    </header>
  );
};

export default Header;
