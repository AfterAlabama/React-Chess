import { FC } from "react";
import { HeaderProps } from "../../helpers/Props/MainPageProps";
import cl from './Header.module.scss';
import HeaderPic from "../../assets/tablegame1.jpg";

const Header: FC<HeaderProps> = ({ clickHandler }) => {
  return (
    <header className={cl.header} >
      <img
        alt = ''
        src = {HeaderPic}
        className={cl.headerImage}
      />
      <article className={cl.headerContent}>
        <h1>Games For Everyone!</h1>
        <p>Wish to play a game? Choose which:</p>
        <button
          className={cl.btn}
          onClick={clickHandler}>
          Games
        </button>
      </article>
    </header>
  );
};

export default Header;
