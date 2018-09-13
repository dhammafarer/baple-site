module.exports = {
  siteMetadata: {
    title: {
      en: 'Baple',
      es: 'Baple',
      zh: 'Baple'
    },
    defLang: 'es',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-next`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
  ],
}
