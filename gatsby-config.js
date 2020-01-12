require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Styled Components & Styled System Gatsby Starter Theme`,
    description: `Gatsby Starter featuring Styled Components and Styled Systems with a well-organized folder structure.`,
    author: `moshemo`,
  },
  plugins: [
    // PLUGINS
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `startup-reporter`,
        short_name: `Starup Reporter`,
        start_url: `/`,
        background_color: `#454545`,
        theme_color: `#454545`,
        display: `minimal-ui`,
        icon: `src/assets/img/manifest-icon.png`, // This path is relative to the root of the site.
      },
    },

    // TRANSFORMERS
    `gatsby-transformer-sharp`,
  ],
}
