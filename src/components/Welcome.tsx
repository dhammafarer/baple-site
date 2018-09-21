import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles//welcome-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Props {
  text: Array<string>
  logo: {
    childImageSharp: {
      sizes: {
        src: string
      }
    }
  }
  classes: any
}

const Welcome: React.SFC<Props> = ({ text, logo, classes }) => (
  <div className={classes.section}>
    <img className={classes.logo} src={logo.childImageSharp.sizes.src}/>

    <div className={classes.text}>
      <Typography
        variant="display1"
        className={classes.english}
        color="inherit"
        gutterBottom
      >
        {text[0]}
      </Typography>
      <Typography
        variant="headline"
        color="inherit"
        className={classes.spanish}
        gutterBottom
      >
        {text[1]}
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(Welcome);

export const WelcomeFragment = graphql`
  fragment WelcomeYaml on PagesYaml {
    welcome {
      text
      logo {
        childImageSharp {
          sizes(maxWidth: 250) {
            src
          }
        }
      }
    }
  }
`;
