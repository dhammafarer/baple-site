import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

interface Props {
  handleClose: any
  open: any
  nav: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
}

const Nav: React.SFC<Props> = ({ open, handleClose, nav }) => (
  <Drawer anchor="right" open={open} onClose={this.handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <List>
        <Typography variant="title">{nav.title}</Typography>
        <img src={nav.logo.childImageSharp.src}/>
      </List>
    </div>
  </Drawer>
);

export default Nav;
