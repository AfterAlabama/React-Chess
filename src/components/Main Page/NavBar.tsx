import React from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className = {classes.nav}>
      <Link 
        to = {RouteNames.DEFAULT} 
        className = {classes.logo}
        >
        <span className = {classes.coral}>Chess</span>zardo
      </Link>
      <div>
        <Link className ={classes.link} to= {RouteNames.DEFAULT}>
          Main Page
        </Link>
        <Link className ={classes.link} to= {RouteNames.CHESS}>
          Chess
        </Link>
        <Link className ={classes.link} to= {RouteNames.CHECKERS}>
          Checkers
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
