module.exports = {
  siteMetadata: {
      title: `manufucktum.de`,
    siteUrl: `https://www.manufucktum.de`
  },
  plugins: [
      "gatsby-plugin-sass", 
      "gatsby-plugin-image", 
      "gatsby-plugin-react-helmet", 
      "gatsby-plugin-sitemap", 
      "gatsby-plugin-sharp", 
      "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `./src/data`
      }
    }
  ]
};