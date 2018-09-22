import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/more-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "gatsby-link";

interface Props {
  heading: string
  link: {
    to: string
    label: string
  }
  mainImg: Image
  logo: Image
  classes: any
}

const More: React.SFC<Props> = ({ heading, mainImg, logo, link, classes }) => (
  <HalfPane reverse src={mainImg.childImageSharp.sizes.src}>
    <div className={classes.section}>
      <img className={classes.logo} src={logo.childImageSharp.sizes.src}/>
      <Typography variant="display2"
        className={classes.heading}
      >
        {heading}
      </Typography>
      <Button className={classes.button} variant="contained" color="primary" size="large">
        <Link to={link.to}>
          {link.label}
        </Link>
      </Button>
    </div>
  </HalfPane>
);

export default withStyles(styles)(More);

export const MoreFragment = graphql`
  fragment MoreYaml on PagesYaml {
    more {
      heading
      mainImg {
        childImageSharp {
          sizes(maxWidth: 800) {
            src
          }
        }
      }
      link {
        to
        label
      }
      logo {
        childImageSharp {
          sizes(maxWidth: 200) {
            src
          }
        }
      }
    }
  }
`
