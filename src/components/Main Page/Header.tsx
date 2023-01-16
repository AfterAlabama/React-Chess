import React, { FC } from "react";
import { HeaderProps } from "../../helpers/Props";
import classes from './Header.module.scss';

const Header: FC<HeaderProps> = ({ clickHandler }) => {
  return (
    <header className = {classes.header} >
      <div 
        className = {classes.headerImage}
      ></div>
      <div className = {classes.headerContent}>
        <h1>Games For Everyone!</h1>
        <p>Wish to play a game? Choose which:</p>
        <button 
          className = {classes.btn} 
          onClick = {clickHandler}>
          Games
        </button>
      </div>
    </header>
  );
};

export default Header;
