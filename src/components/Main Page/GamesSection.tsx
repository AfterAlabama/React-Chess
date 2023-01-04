import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../helpers/RouteNames";
import classes from './GameSection.module.scss';

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
  return (
    <section className= {classes.section} >
      <div 
        ref={divRef} 
        className = {classes.sectionImage}
      ></div>
      <div 
        className = {classes.sectionContent}
        >
        <h1>Choose Your Game</h1>
        <>
          <div className = {classes.game} >
            <div 
              className = {classes.chessImage}
            ></div>
            <div className = {classes.text} >
              <Link 
                className = {classes.bigBtn} to = {RouteNames.CHESS}>
                Play
              </Link>
            </div>
          </div>
          <div className = {classes.game} >
            <div 
              className = {classes.checkersImage} 
            ></div>
            <div className = {classes.text} >
              <Link 
                className = {classes.bigBtn} to = {RouteNames.CHECKERS}>
                Play
              </Link>
            </div>
          </div>
        </>
      </div>
    </section>
  );
});

export default GamesSection;
