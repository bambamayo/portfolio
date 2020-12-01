const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectDetailsTemplate = path.resolve(
    "./src/templates/projectDetails.js"
  )

  const res = await graphql(`
    query {
      allContentfulProjectList {
        edges {
          node {
            id
            projectName
          }
        }
      }
    }
  `)

  res.data.allContentfulProjectList.edges.forEach(edge => {
    createPage({
      component: projectDetailsTemplate,
      path: `/projects/${edge.node.projectName.replace(/ /g, "-")}`,
      context: {
        projectId: edge.node.id,
      },
    })
  })
}
