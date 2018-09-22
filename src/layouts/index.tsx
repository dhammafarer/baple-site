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

class DefaultLayout extends React.Component<Props, {}> {
  render () {
    const {children, data, location} = this.props;
    console.log(data.app);
    return (
      <App {...data.app}>
        {children()}
      </App>
    );
  }
}

export default withRoot(DefaultLayout);

export const query = graphql`
  query DefaultLayoutQuery {
    app: pagesYaml(id: {regex: "/app.yml/"}) {
     ...AppYaml
    }
  }
`;
