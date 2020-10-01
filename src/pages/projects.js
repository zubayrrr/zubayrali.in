import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"

const Projects = ({ data }) => {
  const { repositories } = data.githubData.viewer

  return (
    <Layout title="Zubayr Ali">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          paddingTop: 0,
        }}
      >
        <div
          className="avatar banner"
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            margin: "1.45rem 0px",
            padding: "25px 0",
          }}
        >
          <h2 style={{ marginTop: "0" }}>
            Fetched from my{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zubayrrr?tab=repositories"
              className="link-white"
            >
              Github
            </a>
          </h2>
          <p>
            I've worked on Front-end (React) and a few Blockchain (Solidity)
            projects among others.
          </p>
        </div>
        <hr
          className="contour"
          style={{
            width: "80%",
          }}
        />
        <h3
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "15px",
          }}
        >
          Latest Projects{" "}
          <FontAwesomeIcon icon={faLevelDownAlt} className="icon-font" />
        </h3>
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>

      <p style={{ textAlign: `center` }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zubayrrr?tab=repositories"
          className="link"
        >
          More on Github
        </a>
      </p>
    </Layout>
  )
}

export default Projects

export const gitHubQuery = graphql`
  {
    githubData {
      viewer {
        resourcePath
        repositories(
          last: 12
          privacy: PUBLIC
          orderBy: { field: STARGAZERS, direction: ASC }
        ) {
          nodes {
            name
            description
            homepageUrl
            forkCount
            createdAt
            updatedAt
            resourcePath
            languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`
