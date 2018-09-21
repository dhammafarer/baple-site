import * as React from 'react';
import Categories from '../../components/Categories';
import Welcome from '../../components/Welcome';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsIndexPage extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    console.log(p);
    return (
      <div>
        <Welcome {...p.welcome}/>
      </div>
    );
  }
}

export default PlasticsIndexPage;

export const query = graphql`
  query PlasticsIndexQuery {
    pagesYaml(id: {regex: "/plastics-index.yml/"}) {
     ...WelcomeYaml
     ...CategoriesYaml
    }
  }
`
