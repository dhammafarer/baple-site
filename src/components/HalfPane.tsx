import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/halfPane-styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Link from 'gatsby-link';

interface Props {
  classes: any
  src: string
  reverse?: boolean
}

const HalfPane: React.SFC<Props> = ({ children, classes, src, reverse }) => (
  <section className={classes.section}>
    <Grid container
      className={classes.grid}
      style={{flexDirection: (reverse ? 'row-reverse' : 'row')}}
    >
      <Grid item xs={12} md={6}>
        <div className={classes.text}>
          {children}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${src})`
          }}
        />
      </Grid>
    </Grid>
    <Hidden mdUp>
      <img className={classes.imageSm} src={src}/>
    </Hidden>
  </section>
);

export default withStyles(styles)(HalfPane);
