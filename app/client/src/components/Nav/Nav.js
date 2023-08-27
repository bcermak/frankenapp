import React from 'react';
require('./Nav.css');

const Nav = () => {
  return (
    <>
    <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar" href="/">Home</a>
            <a className="navbar" href="/newpost">New Post</a>
            <a className="navbar" href="Weather">Weather</a>
        </div>
    </nav>
    </>
  )
}

export default Nav