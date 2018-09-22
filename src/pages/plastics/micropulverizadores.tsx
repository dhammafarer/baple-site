import * as React from 'react';
import ProductsPage from '../../components/pages/ProductsPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsMicroPulverizadores extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    return (
      <ProductsPage {...p}/>
    );
  }
}

export default PlasticsMicroPulverizadores;

export const query = graphql`
  query PlasticsMicroPulverizadoresQuery {
    pagesYaml(id: {regex: "/plastics-micropulverizadores.yml/"}) {
      ...ProductsPageYaml
    }
  }
`
