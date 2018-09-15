import * as React from 'react';
import GatsbyLink from 'gatsby-link';

interface Props {
  lang: string
  to: string
}

const Link: React.SFC<Props> = ({ children, lang, to }) => (
  <GatsbyLink
    to={'/' + lang + to}
    style={{textDecoration: 'none'}}
  >
    {children}
  </GatsbyLink>
);

export default Link;
