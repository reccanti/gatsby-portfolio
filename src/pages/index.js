import React from 'react'
import Link from 'gatsby-link'

/**
 * Filter post data into a list in the specified order
 */
function filterPosts(items, nodeArray) {
  return nodeArray.reduce((accumulator, value) => {
    const { node } = value
    if (items[node.portfolio_entry]) {
      if (items[node.portfolio_entry].entry === node.name) {
        accumulator[node.portfolio_entry] = node
      }
    }
    return accumulator
  })
}

const work = {
  "cathedralCorporation": {
    entry:"customer"
  },
  "ADS": {
    entry:"customer"
  },
  "globalThinking": {
    entry:"stack"
  },
  "fitbit": {
    entry:"fast-pace"
  }
}

const projects = {
  "learnVCS": {
    entry:"base"
  },
  "inspire": {
    entry:"base"
  },
  "swipeRogue": {
    entry:"base"
  }
}


const IndexPage = ({ data }) => {
  const workOrder = ["fitbit", "globalThinking", "ADS", "cathedralCorporation"]
  const workPosts = filterPosts(work, data.allFile.edges)

  const projectOrder = ["swipeRogue", "inspire", "learnVCS"]
  const projectPosts = filterPosts(projects, data.allFile.edges)

  return (
    <div>
      <h2>Work Experience</h2>
      {workOrder.map((workName) =>
        <div key={workPosts[workName].id}>
          <h3>{workPosts[workName].childMarkdownRemark.frontmatter.headline}</h3>
          <div 
            dangerouslySetInnerHTML={{ __html: workPosts[workName].childMarkdownRemark.html }}
          ></div>
        </div>
      )}
      <h2>Projects</h2>
      {projectOrder.map((projectName) =>
        <div key={projectPosts[projectName].id}>
          <h3>{projectPosts[projectName].childMarkdownRemark.frontmatter.headline}</h3>
          <div 
            dangerouslySetInnerHTML={{ __html: projectPosts[projectName].childMarkdownRemark.html }}
          ></div>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
query myQuery {
  allFile(filter:{name:{ne:".DS_Store"}}) {
    edges {
      node {
        id
        name
        portfolio_entry:relativeDirectory
        childMarkdownRemark {
          frontmatter {
            headline
          }
          excerpt
          html
        }
      }
    }
  }
}
`

export default IndexPage
