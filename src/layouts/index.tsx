import * as React from 'react';
import * as locale from '../utils/locale';
import { isRoot } from '../utils/helpers';

import withRoot from '../utils/withRoot';
import Helmet from 'react-helmet';
import Header from '../components/Header';

interface State {
  lang: Lang
  lock: boolean
  navigation: {
    title: string
    logo: any
    home: string
    items: Array<any>
  }
};

interface Props {
  children: any
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: {
          es: string
          en: string
          zh: string
        }
      }
    }
    background: any
    pagesYaml: {
      navigation: any
    }
  }
}

class DefaultLayout extends React.Component<Props, State> {
  state: State = {
    lang: 'es',
    lock: false,
    navigation: {
      items: [],
      title: 'Baple',
      logo: null,
      home: '/'
    }
  }

  componentDidMount () {
    const pref = this.props.location.pathname.substr(1,2);
    if (pref == 'en') {
      this.setState({lang: 'en'});
    } else if (pref == 'zh') {
      this.setState({lang: 'zh'});
    } else if (pref == 'es') {
      this.setState({lang: 'es'});
    } else {
      this.setState({lang: locale.getLocale()});
    }
    const d = this.props.location.pathname.split('/')[2] || 'root';
    // set navigation object dynamically
    const nav = this.props.data.pagesYaml.navigation[this.state.lang];
    const navigation = nav.find((x:any) => x.page == d) || nav.find((x:any) => x.page == 'root');
    this.setState({navigation});
  }

  componentDidUpdate (prevProps:any) {
    // update navigation items dynamically
    const d = this.props.location.pathname.split('/')[2];
    if (prevProps.location.pathname.split('/')[2] !== d) {
      const page = d || 'root';
      const nav = this.props.data.pagesYaml.navigation[this.state.lang];
      const navigation = nav.find((x:any) => x.page == d) || nav.find((x:any) => x.page == 'root');
      this.setState({navigation});
    }
  }

  private setLang = (lang: Lang) => {
    locale.saveLocale(lang);
    this.setState({lang});
  }

  private toggleLock = (b: boolean) => {
    this.setState({lock: b});
  }

  render () {
    const {children, data, location} = this.props;
    return (
      <div>
        <Helmet
          title={this.state.navigation.title}
          meta={[
            {name: 'description', content: 'Baple Group'},
          ]}
          link={[
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
          ]}
        />
        <Header
          setLang={this.setLang}
          lang={this.state.lang}
          title={this.state.navigation.title}
          home={this.state.navigation.home}
          logo={this.state.navigation.logo}
          items={this.state.navigation.items}
        />
        <div>
          {children()}
        </div>
      </div>
    );
  }
}

export default withRoot(DefaultLayout);

export const query = graphql`
  query DefaultLayoutQuery {
    site {
      siteMetadata {
        title {
          en
          zh
          es
        }
      }
    }
    background: imageSharp(id: {regex: "/welcome.jpg/"}) {
      sizes(maxWidth: 1920, quality: 50) {
        ...GatsbyImageSharpSizes
      }
    }
    pagesYaml(id: {regex: "/navigation/"}) {
      navigation {
        en {
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
        es {
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
        zh {
          page
          home
          title
          logo {
            childImageSharp {
              sizes(maxWidth: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          items {
            to
            label
          }
        }
      }
    }
  }
`;
