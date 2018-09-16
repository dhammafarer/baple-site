import * as React from 'react';
import DivisionWelcome from '../DivisionWelcome';
import ProductCards from '../ProductCards';
import AboutCompany from '../AboutCompany';

interface Props {
  lang: Lang
  welcome: any
  products: any
  company: any
}

const DivisionPage: React.SFC<Props> = ({ lang, welcome, products, company }) => (
  <div>
    <DivisionWelcome lang={lang} welcome={welcome}/>
    <ProductCards lang={lang} products={products}/>
    <AboutCompany lang={lang} company={company}/>
  </div>
);

export default DivisionPage;
