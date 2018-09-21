import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/contact-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  welcome: any
  classes: any
}

const Contact: React.SFC<Props> = ({ welcome, classes }) => (
  <HalfPane reverse src={welcome.img.childImageSharp.sizes.src}>
    <div className={classes.welcomeText}>
      <img className={classes.welcomeLogo} src={welcome.logo.childImageSharp.sizes.src}/>
      <Typography variant="display2"
        className={classes.title}
        gutterBottom
      >
        {welcome.title}
      </Typography>
      <Typography variant="subheading"
        className={classes.subtitle}
        gutterBottom
        color="secondary"
      >
        {welcome.subtitle}
      </Typography>
    </div>
  </HalfPane>
);

export default withStyles(styles)(Contact);
