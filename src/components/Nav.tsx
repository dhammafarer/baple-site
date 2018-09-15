import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';

interface Props {
  lang: Lang
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
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '1em',
  },
  logo: {
    width: 150,
    marginBottom: 20,

  },
});

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes, lang }) => (
  <Drawer anchor="right" open={true} onClose={this.handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <div className={classes.list}>
        <List>
          <img className={classes.logo} src={nav.logo.childImageSharp.sizes.src}/>
          <Typography variant="title" gutterBottom={true}>{nav.title}</Typography>
          {
            nav.items.map((xs:any) => xs.map((x:any) =>
              <ListItem button={true} divider={true} style={{justifyContent: "center"}}>
                <Link to={x.to} lang={lang}>
                  <Typography
                    variant="caption"
                    className={classes.item}
                    color="secondary"
                    align="center"
                  >
                    {x.label}
                  </Typography>
                </Link>
              </ListItem>
            ))
          }
        </List>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
