import * as React from 'react';
import * as locale from '../utils/locale';
import { isRoot } from '../utils/helpers';

import withRoot from '../utils/withRoot';
import Head from '../components/Head';

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: {
          zh: string
        }
      }
    }
    background: any
    pagesYaml: {
      navigation: any
    }
  }
}

class DefaultLayoutEn extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <div>
        <Head title={data.site.siteMetadata.title.zh}/>
        <div>
          {children()}
        </div>
      </div>
    );
  }
}

export default withRoot(DefaultLayoutEn);

export const query = graphql`
  query DefaultLayoutZhQuery {
    site {
      siteMetadata {
        title {
         zh 
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
