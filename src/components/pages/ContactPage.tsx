import * as React from 'react';
import Contact from '../Contact';

interface Props {
  contact: any
}

const ContactPage: React.SFC<Props> = ({ contact }) => (
  <div>
    <Contact {...contact}/>
  </div>
);

export default ContactPage;

export const ContactPageFragment = graphql`
  fragment ContactPageYaml on PagesYaml {
    ...ContactYaml
  }
`;
