import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import withLang from '../utils/withLang';
import { WithStyles, createStyles } from '@material-ui/core';

interface Props {
  lang: Lang
  to: string
  classes: any
}

const style = createStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

const Link: React.SFC<Props> = ({ children, lang, to, classes }) => (
  <GatsbyLink
    className={classes.link}
    to={'/' + lang + to}
  >
    {children}
  </GatsbyLink>
);

export default withLang(Link);
