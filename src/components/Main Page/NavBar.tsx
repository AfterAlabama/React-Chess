import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="nav">
      <Link to="/" id="logo"><span className="coral">Chess</span>zardo</Link>
      <div>
        <Link id="link" to = "/">Main Page</Link>
        <Link id="link" to = "/chess">Chess</Link>
        <Link id="link" to = "/checkers">Checkers</Link>
      </div>
    </div>
  )
}

export default NavBar
