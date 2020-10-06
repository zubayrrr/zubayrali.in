import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <SEO
          title="404: Not Found"
          // keywords={[
          //   "zubayrali",
          //   "zubayrAli",
          //   "ZubayrAli",
          //   "Zubayrali",
          //   "zubayrAli",
          //   "zubayr ali",
          //   "zubayr Ali",
          //   "Zubayr Ali",
          //   "Zubayr ali",
          //   "zubayr Ali",
          //   "zubairali",
          //   "zubairAli",
          //   "ZubairAli",
          //   "Zubairali",
          //   "zubairAli",
          //   "zubair ali",
          //   "zubair Ali",
          //   "Zubair Ali",
          //   "Zubair ali",
          //   "zubair Ali",
          //   "zubayr",
          //   "Zubayrali.in",
          //   "zubayrali.in",
          //   "zubayrali .in",
          //   "zubayr ali .in",
          //   "Zubairali.in",
          //   "zubairali.in",
          //   "zubair ali .in",
          //   "zubayr ali india",
          //   "zubayr ali portfolio",
          //   "zubair ali portfolio",
          //   "musicnerds",
          //   "music blog",
          //   "blogs about music",
          //   "music blog",
          //   "web development blog",
          //   "web design blog",
          //   "web developer",
          //   "css",
          //   "html",
          //   "reactjs",
          //   "gatsbyjs",
          //   "IDM",
          //   "Experimental music",
          //   "electronic music",
          //   "indie",
          //   "good music blog",
          //   "blog post",
          //   "blogger",
          //   "web developer portfolio",
          //   "reactjs developer portfolio",
          //   "gatsbyjs blog",
          //   "netlify blog",
          //   "netlify portfolio",
          // ]}
        />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
