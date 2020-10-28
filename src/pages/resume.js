import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/avatar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"

import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"
import SEO from "../components/seo"

const Resume = ({ data }) => {
  const { name, avatarUrl, isHireable } = data.githubData.viewer

  return (
    <Layout title="Zubayr Ali">
      <SEO title="Resume" />
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <div
        className="blog-intro resume-banner banner"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "inherit",
          textAlign: "center",
          margin: "1.45rem 0px",

        }}
      >
        <Avatar img={avatarUrl} />
        <div className="resume" style={{
          
        }}>
          <h2 style={{ border: `none`, marginTop: 0 }}>{name}</h2>
          {isHireable && (
            <h3
              style={{
                marginBottom: 0,
                marginTop: 0,
                fontSize: `24px`,
                fontWeight: "lighter",
              }}
            >
              I'm Hireable{" "}
              <span role="img" aria-label="hand">
                😎
              </span>
            </h3>
          )}
        </div>
      </div>
      <hr
        className="contour"
        style={{
          width: "80%",
        }}
      />
      <div className="resume-2">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "15px",
          }}
        >
          Get to know me better{" "}
          <FontAwesomeIcon icon={faLevelDownAlt} className="icon-font" />
        </h3>
        <p>
          My name is Zubayr Ali, I'm a {new Date().getFullYear() - 1999} old Web
          Developer. I work on Front-end technologies such as JS, ReactJs,
          Gatsby, etc. I enjoy learning different technologies and create
          something useful out of it every so often. <br /> I've a bachelor's
          degree in computer science. I am a Blockchain and Cyber security
          enthusiast.
        </p>
        <p>
          Apart from this, I am massively into music, I love listening and
          curating music of all genres.
          <br />I also read books, workout, try to learn foreign languages and
          make coffee.
        </p>

        <ul className="connections">
          {" "}
          Connections:
          <li>
            {/* Browse my repositories{"  "} */}
            <a
              href="http://github.com/zubayrrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="icon-font"
              />
            </a>
          </li>
          <li>
            {/* Keep up with me{"  "} */}
            <a
              href="https://www.linkedin.com/in/zubayr-ali-5257511a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="icon-font"
              />
            </a>
          </li>
          <li>
            {/* Check out my music playlists{"  "} */}
            <a
              href="https://open.spotify.com/user/zubayrrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSpotify}
                size="2x"
                className="icon-font"
              />
            </a>
          </li>
        </ul>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Download my CV
        </a>
      </div>
    </Layout>
  )
}

export default Resume

export const gitHubQuery2 = graphql`
  {
    githubData {
      viewer {
        name
        avatarUrl
        isHireable
      }
    }
  }
`
