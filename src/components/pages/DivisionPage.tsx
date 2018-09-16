import * as React from 'react';
import ProductCards from '../ProductCards';

import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Link from '../Link';

const styles = (theme:any) => createStyles({
  page: {
  },
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
  classes: any
  welcome: any
  products: any
}

const DivisionPage: React.SFC<Props> = ({ classes, lang, welcome, products }) => (
  <div className={classes.page}>
    {/* welcome section */}
    <section>
      <Grid container={true} className={classes.welcome}>
        <Grid item={true} xs={12} md={6}>
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
    {/* welcome section end */}

    {/* products section */}
      <ProductCards lang={lang} products={products}/>
    {/* products section end */}

    {/* company section */}
    <div>
    </div>
    {/* company section end */}

    {/* values section */}
    <div>
    </div>
    {/* values section end */}
  </div>
);

export default withStyles(styles)(DivisionPage);
