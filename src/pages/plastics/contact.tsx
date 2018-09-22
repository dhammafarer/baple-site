import * as React from 'react';
import Categories from '../../components/Categories';
import More from '../../components/More';
import Welcome from '../../components/Welcome';

interface Props {
  data: {
    pagesYaml: {
      welcome: any
      categories: any
      more: any
    }
  }
}

class PlasticsIndexPage extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    console.log(p);
    return (
      <div>
        <Welcome {...p.welcome}/>
        <Categories {...p.categories}/>
        <More {...p.more}/>
      </div>
    );
  }
}

export default PlasticsIndexPage;

export const query = graphql`
  query PlasticsContactQuery {
    pagesYaml(id: {regex: "/plastics-index.yml/"}) {
     ...WelcomeYaml
     ...CategoriesYaml
     ...MoreYaml
    }
  }
`
