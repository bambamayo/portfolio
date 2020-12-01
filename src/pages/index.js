import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "fontsource-roboto-mono"
import "fontsource-raleway"

import SEO from "../components/Layout/seo"
import "../sass/main.scss"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomeMetadata {
        fullName
        jobDescription
      }
    }
  `)

  let contentRef = React.useRef(null)
  let navRef = React.useRef(null)

  return (
    <div className="index__wrapper">
      <SEO
        title="Ayobami Agunroye | Home"
        description="Ayobami Agunroye frontend developer living in Lagos state, Nigeria"
      />
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text-box" ref={contentRef}>
            <h2 className="fullname">{data.contentfulHomeMetadata.fullName}</h2>
            <h4 className="jobdesc">
              {data.contentfulHomeMetadata.jobDescription}
            </h4>
          </div>
          <div className="hero__nav" ref={navRef}>
            <ul className="hero__nav__list">
              <li className="hero__nav__item">
                <Link to="/projects" className="hero__nav__link">
                  <span>01</span> Projects
                </Link>
              </li>
              <li className="hero__nav__item">
                <Link to="/about" className="hero__nav__link">
                  <span>02</span> About
                </Link>
              </li>
              <li className="hero__nav__item">
                <Link to="/contact" className="hero__nav__link">
                  <span>03</span> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
