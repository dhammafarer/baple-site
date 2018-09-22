import * as React from 'react';
import AboutPage from '../../components/pages/AboutPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsAboutPage extends React.Component<Props, {}> {
  render () {
    console.log(this.props.data);
    return (
      <AboutPage {...this.props.data.pagesYaml}/>
    );
  }
}

export default PlasticsAboutPage;

export const query = graphql`
  query PlasticsAboutQuery {
    pagesYaml(id: {regex: "/plastics-about.yml/"}) {
     ...AboutPageYaml
    }
  }
`
