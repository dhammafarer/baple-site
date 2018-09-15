import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from './Nav';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';

interface Props {
  classes: any
  handleClose: any
  toggleMenu: any
  open: any
  nav: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
}

const styles = createStyles({
  grow: {
    flexGrow: 1
  },
  logo: {
    width: 48,
    height: 48,
  }
});

const HeaderBar: React.SFC<Props> = ({ classes, open, handleClose, toggleMenu, nav }) => (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link lang={'en'} to={nav.home}>
            <img className={classes.logo} src={nav.logo.childImageSharp.sizes.src}/>
          </Link>
          <Typography variant="title" color="inherit">
            {nav.title}
          </Typography>
          <div className={classes.grow}/>
          <IconButton color="inherit" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav nav={nav} open={open} handleClose={handleClose}/>
    </div>
);

export default withStyles(styles)(HeaderBar);
