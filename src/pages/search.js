import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/search"

import "../styles/style.css"

const SearchPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const searchIndex = data.siteSearchIndex.index

  return (
    <Layout title={siteTitle}>
      <SEO title="Search" />
      {/* <div
        style={{
          height: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "-50px",
        }}
      > */}
      <Search searchIndex={searchIndex} />
      {/* </div> */}
    </Layout>
  )
}

export default SearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteSearchIndex {
      index
    }
  }
`
