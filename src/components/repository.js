import React from "react"
import Octicon, { Law, Star } from "@githubprimer/octicons-react"
import GitHubButton from "react-github-btn"

const RepositoryHeader = ({ repo }) => {
  return (
    <div
      style={{ display: `flex`, justifyContent: `space-between`, fontSize: 14 }}
    >
      <h3
        style={{
          marginBottom: 0,
          marginTop: 0,
          fontSize: 20,
        }}
      >
        <a
          href={`https://github.com${repo.resourcePath}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h3>
      <GitHubButton
        style={{ display: "flex" }}
        href={`https://github.com${repo.resourcePath}`}
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <span style={{ marginRight: 16 }}>{children}</span>
)

const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0].node
  const timeAgo = new Date(repo.updatedA) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24)) // ms to days
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    )
  }
  return (
    <div style={{ color: `#868892`, fontSize: 12 }}>
      <FooterItem>
        <span
          style={{
            borderRadius: `50%`,
            display: `inline-block`,
            height: 12,
            position: `relative`,
            top: 1,
            width: 12,
            backgroundColor: language.color,
          }}
        />{" "}
        &nbsp;
        {language.name}
      </FooterItem>
      <FooterItem>
        <Octicon icon={Star} /> &nbsp;
        {repo.stargazers.totalCount}{" "}
      </FooterItem>
      {repo.licenseInfo && (
        <FooterItem>
          <Octicon icon={Law} /> {repo.licenseInfo.name}
        </FooterItem>
      )}
      <FooterItem>
        <span className="repo-update">Updated: {updatedAt}</span>
      </FooterItem>
      {repo.homepageUrl && <FooterItem />}{" "}
    </div>
  )
}

const RepositoryDescription = ({ repo }) => (
  <div className="post">
    <p className="repo-desc" style={{ margin: "10px 0" }}>
      {repo.description}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </p>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <div className="repo-body post-card" style={{ padding: "20px 20px" }}>
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

export default Repository
