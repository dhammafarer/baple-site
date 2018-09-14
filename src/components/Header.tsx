import * as React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
}

interface State {
  anchorEl: any | null
}

class Header extends React.Component<Props, State> {
  state:State = {
    anchorEl: null
  }

  handleMenu = (event:Event) => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  render () {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit">
              Baple
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

export default Header;
