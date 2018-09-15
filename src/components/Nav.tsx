import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';

interface Props {
  classes: any
  handleClose: any
  open: any
  nav: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
}

const styles = createStyles({
  list: {
    width: 250
  },
  logo: {
    width: 150
  }
});

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes }) => (
  <Drawer anchor="right" open={open} onClose={this.handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <div className={classes.list}>
        <List>
          <img className={classes.logo} src={nav.logo.childImageSharp.sizes.src}/>
          <Typography variant="title">{nav.title}</Typography>
        </List>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
