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
            <li>
              <a onClick={logout}>Log Out</a>
            </li>
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
