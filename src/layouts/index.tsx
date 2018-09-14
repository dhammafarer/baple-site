import * as React from 'react';
import * as locale from '../utils/locale';
import { navigateTo } from 'gatsby-link';

import withRoot from '../utils/withRoot';
import Helmet from 'react-helmet';

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
    pagesYaml: {
      navigation: any
    }
  }
}

class DefaultLayout extends React.Component<Props, {}> {
  componentDidMount () {
    navigateTo(locale.getLocale());
  }
  render () {
    const {children, data, location} = this.props;
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title.en}
          meta={[
            {name: 'description', content: 'Baple Group'},
          ]}
          link={[
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
          ]}
        />
        <div>
          {children()}
        </div>
      </div>
    );
  }
}

export default withRoot(DefaultLayout);

export const query = graphql`
  query DefaultLayoutQuery {
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
    pagesYaml(id: {regex: "/navigation-en.yml/"}) {
      navigation {
        page
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
