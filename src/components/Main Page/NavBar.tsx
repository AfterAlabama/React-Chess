import { Link } from "react-router-dom";
import { navProps } from "../../helpers/Props";
import { RouteNames } from "../../helpers/RouteNames";
import classes from './NavBar.module.scss';



const NavBar = ({setVisible}: navProps) => {
  return (
    <nav className = {classes.nav}>
      <div 
        className = {classes.logo}
        onClick = {() => setVisible(true)}
        >
        <span className = {classes.coral}>Chess</span>zardo
      </div>
      <div>
        <Link 
          className = {classes.link} 
          to = {RouteNames.DEFAULT}>
          Main Page
        </Link>
        <Link 
          className = {classes.link} 
          to = {RouteNames.CHESS}>
            Chess
        </Link>
        <Link 
          className = {classes.link} 
          to = {RouteNames.CHECKERS}>
          Checkers
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
