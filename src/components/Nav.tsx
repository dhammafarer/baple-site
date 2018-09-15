import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Link from './Link';
import CloseIcon from "@material-ui/icons/Close";

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
    marginTop: '1.5em',
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  langs: {
    marginTop: '1em'
  },
  close: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 4,
    right: 4,
  }
});

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes, lang }) => (
  <Drawer anchor="right" open={open} onClose={handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <div className={classes.list}>
        <IconButton className={classes.close}>
          <CloseIcon color="secondary"/>
        </IconButton>
        <List>
          <img className={classes.logo} src={nav.logo.childImageSharp.sizes.src}/>
          <Typography variant="title" gutterBottom={true}>{nav.title}</Typography>
          {
            nav.items.map((xs:any) => xs.map((x:any) =>
              <Link to={x.to} lang={lang}>
                <ListItem button={true} divider={true} style={{justifyContent: "center"}}>
                  <Typography
                    variant="caption"
                    className={classes.item}
                    color="secondary"
                    align="center"
                  >
                    {x.label}
                  </Typography>
                </ListItem>
              </Link>
            ))
          }
        </List>
        <div className={classes.langs}>
          {
            ['en','es','zh'].map(x =>
              <Link key={x} to='/' lang={x} className={classes.item}>
                <Button color={x===lang ? 'default':'secondary'}>
                  {x}
                </Button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);
