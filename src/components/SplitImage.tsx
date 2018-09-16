import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from './Link';

const styles = (theme:any) => createStyles({
  page: {
    minHeight: 'calc(100vh - 64px)',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  text: {
    height: '100%',
  }
});

interface Props {
  classes: any
  img: string
  reverse?: boolean
}

const CompanyValues: React.SFC<Props> = ({ children, classes, img, reverse }) => (
  <section>
    <Grid container className={classes.page} style={{flexDirection: (reverse ? 'row-reverse' : 'row')}}>
      <Grid item xs={12} md={6}>
        <div className={classes.text}>
          {children}
        </div>
      </Grid>
      <Grid item xs={0} md={6}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${img})`
          }}
        />
      </Grid>
    </Grid>
  </section>
);

export default withStyles(styles)(CompanyValues);
