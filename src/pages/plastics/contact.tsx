import * as React from 'react';
import ContactPage from '../../components/pages/ContactPage';

interface Props {
  data: {
    pagesYaml: any
  }
}

class PlasticsContactPage extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    console.log(p);
    return (
      <div>
        <ContactPage {...p}/>
      </div>
    );
  }
}

export default PlasticsContactPage;

export const query = graphql`
  query PlasticsContactQuery {
    pagesYaml(id: {regex: "/plastics-contact.yml/"}) {
      ...ContactPageYaml
    }
  }
`
