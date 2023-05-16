import merge from "lodash.merge";
// eslint-disable-next-line max-len
import defaultThemeColors from "gatsby-theme-simple-bio/src/gatsby-plugin-theme-ui/colors";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */


export default merge({}, defaultThemeColors, {
  text: "black",
  background: "white",
  modes: {
  },
});
