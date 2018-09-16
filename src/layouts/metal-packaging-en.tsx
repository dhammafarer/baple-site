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
        title: {
          en: string
        }
      }
    }
    background: any
    navYaml: {
      nav: any
    }
  }
}

class DefaultLayoutEn extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <App
        title={data.site.siteMetadata.title.en}
        nav={data.navYaml.nav}
        lang={'en'}
      >
        {children()}
      </App>
    );
  }
}

export default withRoot(DefaultLayoutEn);

export const query = graphql`
  query MetalLayoutEnQuery {
    site {
      siteMetadata {
        title {
          en
        }
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    navYaml(id: {regex: "/nav-metal-packaging-en.yml/"}) {
      nav {
        home
        title
        logo {
          childImageSharp {
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        items {
          to
          label
        }
      }
    }
  }
`;
