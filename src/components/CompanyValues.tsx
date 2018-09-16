import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from './Link';

const styles = (theme:any) => createStyles({
  values: {
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
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    margin: '0 auto',
  },
  value: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  items: {
    margin: theme.spacing.unit,
  },
  paragraphs: {
    margin: theme.spacing.unit,
  }
});

interface Props {
  lang: Lang
  classes: any
  values: any
}

const CompanyValues: React.SFC<Props> = ({ values, classes, lang }) => (
  <section>
    <Grid container className={classes.values}>
      <Grid item xs={12} md={6}>
        <div className={classes.text}>
          <Typography variant="display1" gutterBottom>
            {values.title}
          </Typography>
          <div className={classes.items}>
           {
            values.items.map((x:string, i:number) =>
              <Paper key={i} className={classes.value}>
                {x}
              </Paper>
            )
          }
          </div>
          <div className={classes.paragraphs}>
            {
              values.text.map((x:string, i:number) =>
                <Typography key={i} variant="body1" gutterBottom>
                  {x}
                </Typography>
              )
            }
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${values.img.childImageSharp.sizes.src})`
          }}
        />
      </Grid>
    </Grid>
  </section>
);

export default withStyles(styles)(CompanyValues);
