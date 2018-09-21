import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/about-styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from 'gatsby-link';

interface Props {
  classes: any
  company: any
}

const About: React.SFC<Props> = ({ company, classes }) => (
  <section
    className={classes.company}
    style={{
      backgroundImage: `linear-gradient(to right, rgba(255,255,255,.1),rgba(255,255,255,0.4)),url(${company.img.childImageSharp.sizes.src})`,
    }}
  >
    <div>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography
              color="primary"
              variant="display1"
              gutterBottom
            >
              {company.title}
            </Typography>
            {
              company.text.map((x:string, i:number) =>
                <Typography key={i} variant="body1" gutterBottom>
                  {x}
                </Typography>
              )
            }
          </Paper>
        </Grid>
      </Grid>
    </div>
  </section>
);

export default withStyles(styles)(About);
