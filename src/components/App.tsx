import * as React from 'react';
import Helmet from 'react-helmet';
import Head from './Head';
import Header from './Header';

interface Props {
  title: string
}

const App: React.SFC<Props> = ({ title, children }) => (
  <div>
    <Head title={title}/>
    <Header/>
    {children}
  </div>
);

export default App;
