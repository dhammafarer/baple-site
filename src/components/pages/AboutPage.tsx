import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/about-page-styles';
import About from '../About';

interface Props {
  about: any
}

const AboutPage: React.SFC<Props> = ({ about }) => (
  <div>
    <About {...about}/>
  </div>
);

export default withStyles(styles)(AboutPage);

export const AboutPageFragment = graphql`
  fragment AboutPageYaml on PagesYaml {
    ...AboutYaml
  }
`;
