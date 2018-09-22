import * as React from 'react';
import ProductsPage from '../../components/pages/ProductsPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsBotellas extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    return (
      <ProductsPage {...p}/>
    );
  }
}

export default PlasticsBotellas;

export const query = graphql`
  query PlasticsBotellasQuery {
    pagesYaml(id: {regex: "/plastics-botellas.yml/"}) {
      ...ProductsPageYaml
    }
  }
`
