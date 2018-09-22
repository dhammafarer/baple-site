import * as React from 'react';
import Intro from '../Intro';
import Products from '../Products';

interface Props {
  intro: any
  products: any
}

const ProductsPage: React.SFC<Props> = ({ intro, products }) => (
  <div>
    <Intro {...intro}/>
    <Products products={products}/>
  </div>
);

export default ProductsPage;

export const ProductsPageFragment = graphql`
  fragment ProductsPageYaml on PagesYaml {
    ...IntroYaml
    ...ProductsYaml
  }
`;
