import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types";

import PageLayout from "gatsby-theme-simple-bio/src/layouts/page";

/**
 *
 */
class NotFound extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const description =
      "This page is displayed when location requested is not available";
    return (
      <PageLayout title="404 - Page not found" description={description}>
        <p>
          You have landed in a wrong location. Please{" "}
          <Link to={this.props.history}>go back</Link> (or) head to{" "}
          <Link to="/">home</Link>!!!
        </p>
      </PageLayout>
    );
  }
}

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired,
};
