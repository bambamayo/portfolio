import React from "react"
import Layout from "../components/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Spinner from "../components/Spinner"

export default function Projects() {
  const [projectList, setProjectList] = React.useState(null)
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectList(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            projectName
            projectImages {
              fluid(maxWidth: 1200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    setProjectList(data.allContentfulProjectList.edges)
  }, [data.allContentfulProjectList.edges])

  return (
    <Layout>
      <section className="page-wrapper">
        <h2 className="page-header">Some things i have built</h2>
        <div className="projects">
          {projectList === null ? (
            <Spinner />
          ) : (
            projectList.map(project => (
              <Link
                to={`/projects/${project.node.projectName.replace(/ /g, "-")}`}
                key={project.node.id}
                className="project__link"
              >
                <Img
                  alt={`${project.node.projectName} screenshot`}
                  fluid={project.node.projectImages[0].fluid}
                  className="project__image"
                />
                <h3 className="project__name">{project.node.projectName}</h3>
              </Link>
            ))
          )}
        </div>
      </section>
    </Layout>
  )
}
