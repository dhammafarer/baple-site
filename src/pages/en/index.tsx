import * as React from 'react';
import LandingPage from '../../components/pages/LandingPage';

interface Props {
  data: {
    landingYaml: any
    background: any
  }
}

class IndexPageEn extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <LandingPage
        title={data.landingYaml.title}
        subtitle={data.landingYaml.subtitle}
        divisions={data.landingYaml.divisions}
        background={data.background}
        lang={'en'}
      />
    );
  }
}

export default IndexPageEn;

export const query = graphql`
  query IndexPageEnQuery {
    background: imageSharp(id: {regex: "/landing-background.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    landingYaml(id: {regex: "/landing-en.yml/"}) {
      title
      subtitle
      divisions {
        to
        title
        logo {
          childImageSharp {
            sizes(maxWidth: 120) {
              src
            }
          }
        }
      }
    }
  }
`;
