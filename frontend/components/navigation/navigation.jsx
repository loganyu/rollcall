import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentUser, logout }) => {

  return (
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li>
            <a href="#">Rollcall</a>
          </li>
        </ul>
      </nav>
      <nav className="right-nav">
        <ul>
          <li>
            <Link to="/">Clubs</Link>
          </li>
          {currentUser &&
            <li><button className="header-button" onClick={logout}>Log Out</button></li>
          }
          {!currentUser &&
            <li>
              <Link to="/login">Log in</Link>
            </li>
          }
          {!currentUser &&
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          }
        </ul>
      </nav>
    </header>
  )
};


export default Navigation;
