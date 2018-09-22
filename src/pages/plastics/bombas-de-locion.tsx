import * as React from 'react';
import ProductsPage from '../../components/pages/ProductsPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsBombasDeLocion extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    return (
      <ProductsPage {...p}/>
    );
  }
}

export default PlasticsBombasDeLocion;

export const query = graphql`
  query PlasticsBombasDeLocionQuery {
    pagesYaml(id: {regex: "/plastics-bombas-de-locion.yml/"}) {
      ...ProductsPageYaml
    }
  }
`
