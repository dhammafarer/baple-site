import * as React from 'react';
import LandingPage from '../components/pages/LandingPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    return (
      <LandingPage {...this.props.data.pagesYaml}/>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    pagesYaml(id: {regex: "/index.yml/"}) {
      ...LandingYaml
    }
  }
`
