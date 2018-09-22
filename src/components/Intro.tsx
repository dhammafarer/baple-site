import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/intro-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from 'gatsby-link';

interface Props {
  classes: any
  heading: string
  text: Array<string>
  mainImg: Image
  link: {
    label: string
    to: string
  }
}

const Intro: React.SFC<Props> = ({ heading, text, mainImg, link, classes }) => (
  <HalfPane reverse src={mainImg.childImageSharp.sizes.src}>
    <div className={classes.section}>
      <Typography variant="display2"
        className={classes.heading}
      >
        {heading}
      </Typography>
      <div className={classes.text}>
        {
          text.map((x, i) =>
            <Typography key={i} className={classes.paragraph}>
              {x}
            </Typography>
          )
        }
      </div>
      <Link to={link.to}>
        <Button variant="contained" className={classes.button}>
          {link.label}
        </Button>
      </Link>
    </div>
  </HalfPane>
);

export default withStyles(styles)(Intro);

export const IntroFragment = graphql`
  fragment IntroYaml on PagesYaml {
    intro {
      heading
      mainImg {
        childImageSharp {
          sizes(maxWidth: 1200) {
            src
          }
        }
      }
      text
      link {
        to
        label
      }
    }
  }
`;
