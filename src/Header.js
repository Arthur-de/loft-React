import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
  navigateTo = (page) => {
    this.props.changePage(page);
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LoftTaxi</Typography>
          <Button onClick={() => this.navigateTo('login')} color="inherit">
            Login
          </Button>
          <Button onClick={() => this.navigateTo('map')} color="inherit">
            Map
          </Button>
          <Button onClick={() => this.navigateTo('profile')} color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;