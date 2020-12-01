import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function ProjectDetails({ data }) {
  const project = data.allContentfulProjectList.edges[0].node
  console.log(project)
  return (
    <Layout>
      <section className="page-wrapper">
        <h2 className="page-header">{`Projects / ${project.projectName}`}</h2>
        <div className="project-detail">
          <div className="flex space-btw">
            <div className="project-detail__thumbnail">
              <Img
                alt={`${project.projectName} screenshot`}
                fluid={project.projectImages[0].fluid}
                className="project-detail__thumbnail-img"
              />
            </div>
            <div className="project-detail__meta">
              <h2 className="project-detail__meta-header">Tech stack</h2>
              <div className="project-detail__tech-list">
                {project.techStackList.map(stack => (
                  <p key={stack} className="project-detail__tech-item">
                    {stack}
                  </p>
                ))}
              </div>
              <div className="project-detail__ext-links">
                {project.externalLinks.links.map(link => (
                  <a
                    href={link.website}
                    key={link.name}
                    className="project-detail__ext-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="project-detail__details">
            <p>{project.projectDetails.projectDetails}</p>
          </div>
          <div className="project-detail__images">
            {project.projectImages.slice(1).map(image => (
              <div key={image.key} className="project-detail__image-cont">
                <Img
                  key={image.key}
                  alt={`${project.projectName} screenshot`}
                  fluid={image.fluid}
                  className="project-detail__image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($projectId: String) {
    allContentfulProjectList(filter: { id: { eq: $projectId } }) {
      edges {
        node {
          id
          projectName
          projectDetails {
            projectDetails
          }
          externalLinks {
            id
            links {
              name
              website
            }
          }
          techStackList
          projectImages {
            id
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
