import * as React from 'react';

import { createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Link from '../Link';

const styles = (theme:any) => createStyles({
  page: {
    backgroundColor: 'black',
    backgroundSize: 'cover',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 32,
  },
});

interface Props {
  lang: Lang
  background: any
  title: string
  divisions: Array<any>
  subtitle: string
  classes: any
}

const DivisionPage: React.SFC<Props> = ({ classes, lang }) => (
  <div>
    <Grid container={true} spacing={32} justify="center">
    </Grid>
  </div>
);

export default withStyles(styles)(DivisionPage);
