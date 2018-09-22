import * as React from 'react';
import ProductsPage from '../../components/pages/ProductsPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsTapones extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    return (
      <ProductsPage {...p}/>
    );
  }
}

export default PlasticsTapones;

export const query = graphql`
  query PlasticsTaponesQuery {
    pagesYaml(id: {regex: "/plastics-tapones.yml/"}) {
      ...ProductsPageYaml
    }
  }
`
