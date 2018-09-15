import * as React from 'react';
import Helmet from 'react-helmet';
import Head from './Head';
import Header from './Header';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, createStyles } from "@material-ui/core/styles";

interface Props {
  title: string
  classes: any
}

const styles = createStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1
  }
});

const LandigPage: React.SFC<Props> = ({ title, children, classes }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title}/>
    <Header/>
    <main className={classes.main}>
      {children}
    </main>
  </div>
);

export default withStyles(styles)(LandigPage);
