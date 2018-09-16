import * as React from 'react';
import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from './Link';

const styles = (theme:any) => createStyles({
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  welcome: {
    minHeight: 'calc(100vh - 64px)',
  },
  welcomeText: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    margin: '0 auto',
  },
  welcomeTitle: {
    textTransform: 'uppercase',
  },
  welcomeSubtitle: {
  },
  welcomeLogo: {
    width: 150,
    height: 150,
    marginBottom: '1em',
  },
});

interface Props {
  lang: Lang
  welcome: any
  classes: any
}

const DivisionWelcome: React.SFC<Props> = ({ welcome, classes, lang }) => (
  <section>
    <Grid container={true} className={classes.welcome}>
      <Grid item={true} xs={0} md={6}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${welcome.img.childImageSharp.sizes.src})`
          }}
        />
      </Grid>
      <Grid item sm={12} md={6}>
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
      </Grid>
    </Grid>
  </section>
);

export default withStyles(styles)(DivisionWelcome);
