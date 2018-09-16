import * as React from 'react';
import DivisionPage from '../../../components/pages/DivisionPage';

interface Props {
  data: {
    plasticsYaml: any
  }
}

class PlasticsIndexEn extends React.Component<Props, {}> {
  render () {
    const {data} = this.props;
    return (
      <DivisionPage
        lang={'en'}
        welcome={data.plasticsYaml.welcome}
        products={data.plasticsYaml.products}
        company={data.plasticsYaml.company}
        values={data.plasticsYaml.values}
      />
    );
  }
}

export default PlasticsIndexEn;

export const query = graphql`
  query PlasticsIndexEnQuery {
    plasticsYaml(id: {regex: "/index-en.yml/"}) {
      welcome {
        title
        subtitle
        img {
          childImageSharp {
            sizes (maxWidth: 600) {
              src
            }
          }
        }
        logo {
          childImageSharp {
            sizes (maxWidth: 200) {
              src
            }
          }
        }
      }
      products {
        title
        items {
          title
          to
          img {
            childImageSharp {
              sizes (maxWidth: 100) {
                src
              }
            }
          }
        }
      }
      company {
        title
        text
        img {
          childImageSharp {
            sizes (maxWidth: 900) {
              src
            }
          }
        }
      }
      values {
        title
        text
        items
        img {
          childImageSharp {
            sizes (maxWidth: 900) {
              src
            }
          }
        }
      }
    }
  }
`;
