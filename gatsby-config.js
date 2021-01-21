/**
 * 
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/pages/Layout.tsx`
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/locales`,
        // Supported languages
        languages: [`pl`, `en`],
        // Default site language
        defaultLanguage: `pl`,
        // Redirects to `/pl` in the route `/`
        redirect: false,
      },
    },
  ],
}

