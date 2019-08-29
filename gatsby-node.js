exports.createPages = async ({actions, graphql, reporter}, themeOptions) => {
    reporter.info(`Creating page at ${baseUrl}`);
    actions.createPage({
      path: baseUrl,
      component: require.resolve("./src/templates/home.js"),
    });
  };