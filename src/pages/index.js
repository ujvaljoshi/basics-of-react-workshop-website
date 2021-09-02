import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../components/TOCCard";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
            authorImage
            author
            authorSubtitle
            courseImage
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
                section
                description
                icon
              }
            }
          }
        }
      }
    `}
    render={(props) => (
      <div className="index">
        <Card
          title="Table of Contents"
          content={props.allMarkdownRemark.edges}
        />
      </div>
    )}
  />
);

export default IndexPage;
