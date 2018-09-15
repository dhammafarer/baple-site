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
  lang: Lang
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
  bar: {
    backgroundColor: 'white',
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    marginTop: 5,
    marginRight: 10,
    width: 48,
    height: 48,
    alignSelf: 'center',
  },
  title: {
    textTransform: 'uppercase'
  }
});

const HeaderBar: React.SFC<Props> = ({ classes, open, handleClose, toggleMenu, nav, lang }) => (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link lang={lang} to={nav.home}>
            <img className={classes.logo} src={nav.logo.childImageSharp.sizes.src}/>
          </Link>
          <Typography variant="title" color="primary" className={classes.title}>
            {nav.title}
          </Typography>
          <div className={classes.grow}/>
          <IconButton color="primary" onClick={toggleMenu}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav lang={lang} nav={nav} open={open} handleClose={handleClose}/>
    </div>
);

export default withStyles(styles)(HeaderBar);
