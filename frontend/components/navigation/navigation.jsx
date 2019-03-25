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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'

class Navigation extends React.Component { 
  constructor(props) {
    super(props);
    
    this.handleCreateClub = this.handleCreateClub.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
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
      this.handleNavigate(`/`);
    });
  }

  handleNavigate(path) {
    this.props.history.push(path);
  }

  render() {
    const { currentUser, classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Runspots
            </Typography>
            <Button color="inherit" onClick={() => this.handleNavigate(`/clubs/new`)}>
              Start a new club
            </Button>
            <Button color="inherit" onClick={() => this.handleNavigate(`/`)}>
              Clubs
            </Button>
            {currentUser &&
              <Button color="inherit" onClick={this.handleLogOut}>
                Log Out
              </Button>
            }
            {!currentUser &&
              <Button color="inherit" onClick={() => this.handleNavigate(`/login`)}>
                Log In
              </Button>
            }
            {!currentUser &&
              <Button color="inherit" onClick={() => this.handleNavigate(`/signup`)}>
                Sign Up
              </Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};


export default withRouter(Navigation)