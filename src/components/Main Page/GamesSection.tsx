import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const GamesSection = forwardRef<HTMLDivElement>((_, divRef) => {
  return (
    <section className="section">
      <div ref={divRef} id="section-image"></div>
      <div id="section-content">
        <h1>Choose Your Game</h1>
        <>
          <div id="game">
            <div id="chess-image"></div>
            <div id="text">
              <Link className="bigBtn" to="/chess">
                Play
              </Link>
            </div>
          </div>
          <div id="game">
            <div id="checkers-image"></div>
            <div id="text">
              <Link className="bigBtn" to="/checkers">
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
