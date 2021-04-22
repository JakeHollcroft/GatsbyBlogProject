module.exports = {
  siteMetadata: {
    title: 'Jake Hollcroft Gatsby Project',
    author: 'Jake Hollcroft'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '66peyqo3lpbo',
        accessToken: 'XdC-7VJs0kqJf-HlcnoFYdZpi0f33NUSl_zXEGe4IQk'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
