import React, { Component } from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHashtag,
  faSearch,
  faMoon,
  faSun,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons"

class Layout extends Component {
  render() {
    const { title, children } = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="tog">
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                className="tog-checkbox"
              />
              {theme === "dark" ? (
                <div className="tog-text">
                  <FontAwesomeIcon
                    title="Toggle dark mode"
                    icon={faSun}
                    size="lg"
                    className="icon-font"
                  />
                </div>
              ) : (
                <div className="tog-text">
                  <FontAwesomeIcon
                    icon={faMoon}
                    size="lg"
                    className="icon-font"
                  />{" "}
                </div>
              )}
            </label>
          )}
        </ThemeToggler>
      </div>
    )

    return (
      <div className="site-container">
        <div className="header-container">
          <Link className="header-title" to={`/`} title="Home">
            {title}
          </Link>
          <div className="nav-container">
            <ul className="header-link">
              <li>
                <Link to={`/tags`}>
                  <FontAwesomeIcon
                    title="Search with hashtags"
                    icon={faHashtag}
                    size="lg"
                    className="icon-font"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/search`}>
                  <FontAwesomeIcon
                    title="Search"
                    icon={faSearch}
                    className="icon-font"
                    size="lg"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/projects`}>Projects</Link>
              </li>
              <li>
                <Link to={`/resume`}>Resumé</Link>
              </li>
              <li title="Toggle dark mode">{toggler}</li>
            </ul>
          </div>
        </div>
        <hr className="contour" style={{ margin: "0" }} />
        <main>{children}</main>
        <footer className="footer-copyright">
          <hr className="contour" style={{ marginBottom: "20px" }} />©{" "}
          {new Date().getFullYear()} {title}, Built with
          {` `}
          <a className="footer-gatsby" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
        <ScrollUpButton
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
        >
          <FontAwesomeIcon
            title="Search"
            icon={faLevelUpAlt}
            className="icon-font"
            size="lg"
          />
        </ScrollUpButton>
      </div>
    )
  }
}

export default Layout
