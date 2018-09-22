import * as React from 'react';

import withRoot from '../utils/withRoot';
import App from '../components/structural/App';

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    app: any
  }
}

class PlasticsLayout extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    return (
      <App {...data.app}>
        {children()}
      </App>
    );
  }
}

export default withRoot(PlasticsLayout);

export const query = graphql`
  query PlasticsQuery {
    app: pagesYaml(id: {regex: "/app-plastics.yml/"}) {
     ...AppYaml
    }
  }
`;
