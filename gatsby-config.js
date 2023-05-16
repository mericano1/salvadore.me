const pathPrefix = "/";
const baseUrl = "/";
let serviceWorkerUrl = pathPrefix + baseUrl;
serviceWorkerUrl = serviceWorkerUrl.replace(/\/?$/, "/");

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    appName: "a personal README",
    title: "a personal README",
    author: "Andrea/Andrew Salvadore",
    siteUrl: "https://salvadore.me",
    description:
      "a personal README" ,
    social: {
      twitter: "mericano1",
    },
  },
  plugins: [
    {
      resolve: "gatsby-theme-simple-bio",
      options: {
        baseUrl: baseUrl,
        rounded: true,
        assetsPath: "content/assets",
        homePath: "content/home"
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "read more about me",
        short_name: "readme for asalvadore",
        start_url: serviceWorkerUrl,
        background_color: "#f0efef",
        theme_color: "#f0efef",
        display: "minimal-ui",
        // This path is relative to the root of the site.
        icon: `${__dirname}/content/assets/icon.svg`,
      },
    }
  ],
};
