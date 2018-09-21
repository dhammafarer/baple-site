import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles//welcome-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  lang: Lang
  welcome: any
  classes: any
}

const DivisionWelcome: React.SFC<Props> = ({ welcome, classes, lang }) => (
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

export default withStyles(styles)(DivisionWelcome);
