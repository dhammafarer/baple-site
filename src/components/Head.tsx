import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string
}

const Head: React.SFC<Props> = ({ title }) => (
  <Helmet
    title={title}
    meta={[
      {name: 'description', content: 'Baple Group'},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
    ]}
  />
);

export default Head;
