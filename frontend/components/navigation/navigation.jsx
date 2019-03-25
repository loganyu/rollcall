import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      // <header className="main-nav">
      //   <nav className="left-nav">
      //     <ul>
      //       <li>
      //         <a href="#">Runspots</a>
      //       </li>
      //     </ul>
      //   </nav>
      //   <nav className="right-nav">
      //     <ul>
      //       <li>
      //         <div
      //           className="new-club-link"
      //           onClick={this.handleCreateClub}>
      //           Start a new club
      //       </div>
      //       </li>
      //       <li>
      //         <Link to="/">Clubs</Link>
      //       </li>
      //       {currentUser &&
      //         <li>
      //           <a onClick={this.handleLogOut}>Log Out</a>
      //         </li>
      //       }
      //       {!currentUser &&
      //         <li>
      //           <Link to="/login">Log in</Link>
      //         </li>
      //       }
      //       {!currentUser &&
      //         <li>
      //           <Link to="/signup">Sign up</Link>
      //         </li>
      //       }
      //     </ul>
      //   </nav>
      // </header>
    )
  }
};


export default withRouter(connect()(withStyles(styles)(Navigation)))