import * as React from 'react';

import withRoot from '../utils/withRoot';
import App from '../components/structural/App';

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    background: any
    logo: any
    nav: any
  }
}

class DefaultLayout extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <App
        title={data.site.siteMetadata.title}
        nav={data.nav}
        lang={'es'}
        logo={data.logo.sizes.src}
      >
        {children()}
      </App>
    );
  }
}

export default withRoot(DefaultLayout);

export const query = graphql`
  query DefaultLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    logo: imageSharp(id: {regex: "/LOGO_Baple_Plastics.png/"}) {
      sizes(maxWidth: 120) {
        ...GatsbyImageSharpSizes
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    nav: pagesYaml(id: {regex: "/nav-index.yml/"}) {
     ...NavPagesYaml
    }
  }
`;
