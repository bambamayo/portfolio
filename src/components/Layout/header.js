import { Link } from "gatsby"
import React from "react"

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logo__box">
          <h1 className="logo__text">
            <Link to="/" className="logo__link">
              Ayobami Agunroye
            </Link>
          </h1>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="/projects"
              activeClassName="nav__link--active"
              className="nav__link"
            >
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/about"
              activeClassName="nav__link--active"
              className="nav__link"
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              activeClassName="nav__link--active"
              className="nav__link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
