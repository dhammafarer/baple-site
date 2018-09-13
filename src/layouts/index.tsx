import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import withRoot from '../utils/withRoot';
import Header from '../components/Header';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
          ]}
        />
        <Header />
        <div>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default withRoot(DefaultLayout);
