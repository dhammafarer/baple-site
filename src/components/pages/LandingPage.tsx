import * as React from 'react';

import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/landing-page-styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Link from 'gatsby-link';

interface Division {
  logo: {
    childImageSharp: {
      sizes: {
        src: string
      }
    }
  }
  link: {
    to: string
    label: string
  }
}
interface Props {
  background: {
    childImageSharp: {
      sizes: {
        src: string
      }
    }
  }
  heading: string
  subheading: string
  divisions: Array<Division>
  classes: any
}

const LandingPage: React.SFC<Props> = ({ heading, subheading, divisions, background, classes }) => (
  <div
    className={classes.page}
    style={{
      backgroundImage: `url(${background.childImageSharp.sizes.src})`,
    }}
  >
    {/* Hero unit */}
    <div className={classes.heroContent}>
      <Typography
        className={classes.heading}
        variant="display2"
        align="center"
        color="inherit"
      >
        {heading}
      </Typography>
      <Typography
        className={classes.subheading}
        variant="headline"
        align="center"
        color="secondary"
      >
        {subheading}
      </Typography>
    </div>
    {/* End hero unit */}
    <Grid container={true} spacing={32} justify="center" className={classes.cards}>
      {
        divisions.map(d =>
          <Grid key={d.link.to} item xs={12} sm={6} md={3}>
            <Link to={d.link.to} className={classes.link}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardContent className={classes.content}>
                    <img className={classes.cardLogo} src={d.logo.childImageSharp.sizes.src}/>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        )
      }
    </Grid>
  </div>
);

export default withStyles(styles)(LandingPage);

export const LandingFragment = graphql`
  fragment LandingYaml on PagesYaml {
    heading
    subheading
    background {
      childImageSharp {
        sizes(maxWidth: 1600) {
          src
        }
      }
    }
    divisions {
      link {
        to
        label
      }
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
