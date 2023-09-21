const config = require("./config/site")


module.exports = {
  siteMetadata: {
    title: "Via Del Web | Web Solutions for Small Businesses and Entrepreneurs",
    author: "Salem Aziel",
    siteUrl: "https://viadelweb.com",
    siteImage: "/static/assets/logo-vertical-white2.png",
    description: "Let's build your Digital Real Estate.",
    ...config
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Via Del Web - Web Solutions for Small Businesses and Entrepreneurs',
        short_name: 'Via Del Web',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'static/assets/logo-vertical-white2.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://analytics.viadelweb.cloud",
        siteUrl: "https://viadelweb.com",
        // All the optional settings
//        matomoPhpScript: "piwik.php",
        matomoJsScript: "matomo.js",
        exclude: ["/offline-plugin-app-shell-fallback/"],
        requireConsent: false,
        disableCookies: true,
        //cookieDomain: "*.example.org",
//        localScript: "/piwik.js",
        dev: false,
        enableJSErrorTracking: true,
      },
    },
    'gatsby-plugin-remove-generator',
//    {
//      resolve: `gatsby-plugin-gdpr-cookies`,
//      options: {
//        googleAnalytics: {
//          trackingId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-google-analytics', // default
//          anonymize: true, // default
//          allowAdFeatures: false // default
//        },
//        googleTagManager: {
//          trackingId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-google-tagmanager', // default
//          dataLayerName: 'dataLayer', // default
//        },
//        facebookPixel: {
//          pixelId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-facebook-pixel', // default
//        },
//        tikTokPixel: {
//          pixelId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
//        },
//      hotjar: {
//        hjid: '0000000',
//        hjsv: '6',
//        cookieName: 'gatsby-gdpr-hotjar', // default
//      },
//        // defines the environments where the tracking should be available  - default is ["production"]
//        environments: ['production', 'development']
//      },
//    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sitemap`
  ],
}
