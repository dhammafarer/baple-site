import * as React from 'react';
import ProductsPage from '../../components/pages/ProductsPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsPulverizadores extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    console.log(p);
    return (
      <ProductsPage {...p}/>
    );
  }
}

export default PlasticsPulverizadores;

export const query = graphql`
  query PlasticsPulverizadoresQuery {
    pagesYaml(id: {regex: "/plastics-pulverizadores.yml/"}) {
      ...ProductsPageYaml
    }
  }
`
