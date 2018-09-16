import * as React from 'react';
import DivisionWelcome from '../DivisionWelcome';
import ProductCards from '../ProductCards';

interface Props {
  lang: Lang
  classes: any
  welcome: any
  products: any
}

const DivisionPage: React.SFC<Props> = ({ classes, lang, welcome, products }) => (
  <div>
      <DivisionWelcome lang={lang} welcome={welcome}/>
      <ProductCards lang={lang} products={products}/>
  </div>
);

export default DivisionPage;
