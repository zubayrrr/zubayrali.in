import React from "react"
import _ from "lodash"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.distinct

  return (
    <Layout title={siteTitle}>
      <SEO title="Tags" />
      <div
        style={{
          height: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "-50px",
        }}
      >
        <div className="tag-archive-container">
          {tags.map(tag => {
            return (
              <Link
                className="tag-archive-link"
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}
              >
                <div className="tag-archive-item">{tag}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <TagIndex props data={data} />}
  />
)
