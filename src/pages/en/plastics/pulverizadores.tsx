import * as React from 'react';
import DivisionPage from '../../../components/pages/DivisionPage';
import ProductsIntro from '../../../components/ProductsIntro';
import ProductsList from '../../../components/ProductsList';

interface Props {
  data: {
    plasticsYaml: any
  }
}

class PulverizadoresEn extends React.Component<Props, {}> {
  render () {
    const {data} = this.props;
    return (
      <div>
        <ProductsIntro content={data.plasticsYaml.intro}/>
        <ProductsList content={data.plasticsYaml.products}/>
      </div>
    );
  }
}

export default PulverizadoresEn;

export const query = graphql`
  query PulverizadoresEnQuery {
    plasticsYaml(id: {regex: "/pulverizadores-en.yml/"}) {
      intro {
        title
        img {
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
        text
      }
      products {
        title
        img {
          childImageSharp {
            sizes(maxWidth: 200) {
              src
            }
          }
        }
        text
        spec {
          title
          cells {
            key
            value
          }
        }
      }
    }
  }
`;
