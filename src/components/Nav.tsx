import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/nav-styles';
import Link from 'gatsby-link';
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  classes: any
  handleClose: any
  open: any
  logo: string
  title: string
  nav: {
    links: Array<any>
  }
}

const Nav: React.SFC<Props> = ({ open, handleClose, nav, classes, logo, title}) => (
  <Drawer anchor="right" open={open} onClose={handleClose}>
    <div
      tabIndex={0}
      role="button"
      onClick={handleClose}
      onKeyDown={handleClose}
      className={classes.list}
    >
      <IconButton className={classes.close}>
        <CloseIcon color="secondary"/>
      </IconButton>
      <List>
        <img className={classes.logo} src={logo}/>
        <Typography variant="title" gutterBottom={true}>{title}</Typography>
        {
          nav.links.map((x:any) =>
            <Link key={x.to} to={x.to}>
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
          )
        }
      </List>
      <div className={classes.contact}>
        <div className={classes.details}>
          <PhoneIcon className={classes.icon}/>
          <Typography color="inherit" gutterBottom>
            +886-2-5431-2421
          </Typography>
        </div>
        <div className={classes.details}>
          <EmailIcon className={classes.icon}/>
          <Typography color="inherit">
            info@baple.es
          </Typography>
        </div>
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(Nav);

export const NavFragment = graphql`
  fragment NavPagesYaml on PagesYaml {
    links {
      to
      label
    }
  }
`;
