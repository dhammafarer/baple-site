import * as React from 'react';

interface Props {
  lang: Lang
  logo: any
  title: string
  home: string
  setLang: setLang
  items: any
}

const Header: React.SFC<Props> = ({setLang, lang, logo, title, home, items}) => (
  <div>
    Header
  </div>
);

export default Header;
