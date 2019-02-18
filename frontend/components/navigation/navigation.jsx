import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends React.Component { 
  constructor(props) {
    super(props);
    
    this.handleCreateClub = this.handleCreateClub.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleCreateClub() {
    if (this.props.currentUser) {
      this.props.history.push(`/clubs/new`);
    } else {
      this.props.history.push(`/signup`);
    }
  }

  handleLogOut() {
    this.props.logout().then(() => {
      if (this.props.location.pathname !== '/'){
        this.props.history.push(`/`);
      }
    });
  }

  render() {
    const { currentUser } = this.props;

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
              <div
                className="new-club-link"
                onClick={this.handleCreateClub}>
                Start a new club
            </div>
            </li>
            <li>
              <Link to="/">Clubs</Link>
            </li>
            {currentUser &&
              <li>
                <a onClick={this.handleLogOut}>Log Out</a>
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
  }
};


export default withRouter(Navigation);
