const fs = require("fs");
const merge = require("lodash.merge");
const crypto = require("crypto");

// Default options to be used in theme
const defaultOptions = {
  // Base url for rendering site
  baseUrl: "/", // Default: "/"
  // Directory path for images
  assetsPath: "content/assets", // Default: "content/assets"
  // Directory path for MDX home page content
  homePath: "content/home", // Default: "content/home"
  // Should the theme have rounded components
  rounded: false, // Default: false
};

let options;
let baseUrl;
let assetsPath;
let homePath;
let rounded;

// 1. Make sure the necessary directories exist
exports.onPreBootstrap = ({reporter}, themeOptions) => {
  // Options created using default and provided options
  options = merge({}, defaultOptions, themeOptions);
  reporter.info(`Options: ${JSON.stringify(options, null, 2)}`);
  baseUrl = options.baseUrl;
  assetsPath = options.assetsPath;
  homePath = options.homePath;
  rounded = options.rounded;

  const directories = [assetsPath, homePath];

  directories.map((directoryPath) => {
    reporter.info(`Looking for ${directoryPath} directory`);
    if (!fs.existsSync(directoryPath)) {
      reporter.info(`Creating the ${directoryPath} directory`);
      fs.mkdirSync(directoryPath);
    }
  });
};

exports.createPages = async ({actions, graphql, reporter}, themeOptions) => {
    reporter.info(`Creating page at ${baseUrl}`);
    actions.createPage({
      path: baseUrl,
      component: require.resolve("./src/gatsby-theme-simple-bio/templates/home.js"),
    });
  };