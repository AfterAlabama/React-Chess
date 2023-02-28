import { FC } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../helpers/Props/MainPageProps";
import { RouteNames } from "../../helpers/Enums/RouteNames";
import cl from './NavBar.module.scss';



const NavBar: FC<NavProps> = ({ setVisible }) => {
  return (
    <nav className={cl.nav}>
      <article
        className={cl.logo}
        onClick={() => setVisible(true)}
      >
        <span className={cl.coral}>Chess</span>zardo
      </article>
      <ul
        className={cl.ul}
      >
        <li>
          <Link
            className={cl.link}
            to={RouteNames.DEFAULT}>
            Main Page
          </Link>
        </li>
        <li>
          <Link
            className={cl.link}
            to={RouteNames.CHESS}>
            Chess
          </Link>
        </li>
        <li>
          <Link
            className={cl.link}
            to={RouteNames.CHECKERS}>
            Checkers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
