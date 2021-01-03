import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

export default function Porfolio() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        aboutText {
          aboutText
        }
        aboutImage {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="page-wrapper">
        <h2 className="page-header">About me</h2>
        <div className="about">
          <div className="about__text-cont">
            <p className="about__text">
              {data.contentfulAbout.aboutText.aboutText}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
