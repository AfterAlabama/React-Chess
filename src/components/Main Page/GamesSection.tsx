import React from 'react'
import { Link } from 'react-router-dom';

const GamesSection = () => {
  return (
    <section className="section">
      <div id="section-image"></div>
      <div id="section-content">
        <h1>Choose Your Game</h1>
        <div id="games">
          <div id="game">
            <div id="chess-image"></div>
            <div id="chess-text">
              <p>Chess</p>
              <Link id= "btn-link" to = "/chess">Play</Link>
            </div>
          </div>
          <div id="game">
            <div id="checkers-image"></div>
            <div id="checkers-text">
              <p>Checkers</p>
              <Link id= "btn-link" to = "/checkers">Play</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GamesSection
