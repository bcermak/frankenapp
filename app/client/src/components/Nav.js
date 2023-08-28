import React from 'react';
import { Link } from "react-router-dom";
require('./css/Nav.css');

const Nav = () => {
  return (
    <>
    <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" style={{color: 'white'}}>Home</Link>
          <Link to="/newjournal" style={{color: 'white'}}>New Journal</Link>
          <Link to="/journals" style={{color: 'white'}}>Journals</Link>
          <Link to="/tunes" style={{color: 'white'}}>Tunes</Link>
          <Link to="/planner" style={{color: 'white'}}>Planner</Link>
        </div>
    </nav>
    </>
  )
}

export default Nav