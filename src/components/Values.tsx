import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/values-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

interface Props {
  classes: any
  values: any
}

const Values: React.SFC<Props> = ({ values, classes }) => (
  <HalfPane src={values.img.childImageSharp.sizes.src}>
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
  </HalfPane>
);

export default withStyles(styles)(Values);
