import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/about-page-styles';
import About from '../About';
import Advantages from '../Advantages';
import More from '../More';

interface Props {
  about: any
  advantages: any
  more: any
}

const AboutPage: React.SFC<Props> = ({ about, advantages, more }) => (
  <div>
    <About {...about}/>
    <Advantages {...advantages}/>
    <More {...more}/>
  </div>
);

export default withStyles(styles)(AboutPage);

export const AboutPageFragment = graphql`
  fragment AboutPageYaml on PagesYaml {
    ...AboutYaml
    ...AdvantagesYaml
    ...MoreYaml
  }
`;
