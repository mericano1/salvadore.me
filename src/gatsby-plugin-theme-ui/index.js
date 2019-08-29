import merge from "lodash.merge";
import defaultTheme from "gatsby-theme-simple-bio/src/gatsby-plugin-theme-ui";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

export default merge({}, defaultTheme, {
  styles: {
    h1: {
      marginTop: 3,
      marginBottom: 3
    },
    h2: {
      fontSize: 4,
      "> span": {
        fontSize: 4,
      },
    },
    "blockquote": {
      "position": "relative",
      "fontFamily": "Georgia, serif",
      "fontSize": "3.2rem",
      "fontWeight": "500",
      "color": "#333",
      "marginInlineStart" : "0.3em",
      "marginInlineEnd" : "0.3em",
      "quotes": "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019"
    },
    "blockquote:before": {
      "color": "#c6c6c6",
      "fontSize": "2.0em",
      "fontWeight": 400,
      "lineHeight": "0.1em",
      "position": "absolute",
      "left": 0,
      "content": "open-quote",
      "verticalAlign": "-0.15em"
    },
    "blockquote:after" : {
      "color": "#c6c6c6",
      "fontSize": "2.0em",
      "fontWeight": 400,
      "lineHeight": "0.1em",
      "content": "close-quote",
      "verticalAlign": "-0.7em"
    },
    "blockquote > i": {
      "position": "absolute",
      "textAlign": "right",
      "fontSize": "0.4em",
      "bottom": "-1em",
      "right": "1em"
    }

  }
});