import React from "react";
import PropTypes from "prop-types";

import PageLayout from "gatsby-theme-simple-bio/src/layouts/page";
import {screens, from} from "gatsby-theme-simple-bio/src/components/breakpoints";
import Grid from "gatsby-theme-simple-bio/src/components/grid/grid";
import GridItem from "gatsby-theme-simple-bio/src/components/grid/grid-item";
import FigureBio from "gatsby-theme-simple-bio/src/components/bio/figure";
import SocialBio from "gatsby-theme-simple-bio/src/components/bio/social";
import PositionBio from "gatsby-theme-simple-bio/src/components/bio/position";
import DescriptionBio from "gatsby-theme-simple-bio/src/components/bio/description";
import {useYamlAuthor} from "gatsby-theme-simple-bio/src/hooks/queries/useYamlAuthor";
import {useYamlAuthorPositions} from "gatsby-theme-simple-bio/src/hooks/queries/useYamlAuthorPositions";
import {useMdxHomePage} from "gatsby-theme-simple-bio/src/hooks/queries/useMdxHomePage";

HomeLayout.propTypes = {
  location: PropTypes.any.isRequired,
};

HomeLayout.defaultProps = {};

/**
 * Home layout - Used in home page
 * @return {JSX} Rendered children for the HomeLayout
 */
function HomeLayout({location}) {
    
  // Get the meta information from mdx file
  const homePage = useMdxHomePage();
  // Get author information from the yaml
  const author = useYamlAuthor();
  // Get author positions from the yaml
  const positions = useYamlAuthorPositions();
  const title = homePage.frontmatter.title || "Home page";
  const description = homePage.frontmatter.summary || "Home page";
  // Profile image to be displayed on home page
  const image = author.cover.childImageSharp;
  return (
    <PageLayout title={title} description={description} location={location}>
      <Grid noCols={2} nSizes={[20, 80]}>
        <GridItem
          id="figureBio"
          css={{
            margin: "0 10%",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            [from(screens.mobile)]: {
              position: "sticky",
              top: "15vh",
              placeSelf: "self-start stretch",
            },
          }}
        >
          {image != null && <FigureBio image={image} />}
          {
            <SocialBio
              linkedin={author.username.linkedin}
              github={author.username.github}
              twitter={author.username.twitter}
            />
          }
          {positions != null && positions.length > 0 && (
            <PositionBio positions={positions} />
          )}
        </GridItem>
        <GridItem id="descriptionBio" css={{padding: "0 1rem 1rem 1rem"}}>
          <DescriptionBio description={homePage.body} />
        </GridItem>
      </Grid>
    </PageLayout>
  );
}

export default HomeLayout;
