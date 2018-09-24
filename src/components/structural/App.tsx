import * as React from 'react';
import Helmet from 'react-helmet';
import Head from '../Head';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/layout-styles';

interface Props {
  lang: Lang
  title: string
  logo: Image
  nav: any
  classes: any
}

const App: React.SFC<Props> = ({ title, logo, children, nav, classes, lang }) => (
  <div className={classes.layout}>
    <CssBaseline/>
    <Head title={title} lang={lang}/>
    <Header title={title} logo={logo.childImageSharp.sizes.src} nav={nav}/>
    <main className={classes.main}>
      {children}
    </main>
    <Footer logo={logo.childImageSharp.sizes.src} title={title}/>
  </div>
);

export default withStyles(styles)(App);

export const AppFragment = graphql`
  fragment AppYaml on PagesYaml {
    title
    lang
    logo {
      childImageSharp {
        sizes(maxWidth: 200) {
          src
        }
      }
    }
    nav {
      home
      links {
        to
        label
        links
          {
            to
            label
          }
      }
    }
  }
`;
