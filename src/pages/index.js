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

      { /* about section */ }
      <h1>Hi I'm Ben Wilcox, and I make cool stuff for the web</h1>
      <p>I'm a developer at Fitbit currently based in Boston MA</p>
      <h2>Find me at...</h2>
      <ul>
        <li><a href={data.site.siteMetadata.socialLinks.linkedin}>LinkedIn</a></li>
        <li><a href={data.site.siteMetadata.socialLinks.github}>GitHub</a></li>
        <li><a href={data.site.siteMetadata.socialLinks.codepen}>CodePen</a></li>
      </ul>
      <ul>
        <li>You can read about some of the projects I've worked on here.</li>
        <li>I've also worked on some smaller experiments, which you can see here.</li>
        <li>You can read about my work experience here.</li>
        <li>You can also find my resume here.</li>
        <li>Want to get in touch? Email me at benjaminwilcox93@gmail.com.</li>
      </ul>

      { /* Projects section */ }
      <h2>Projects</h2>
      {projectOrder.map((projectName) =>
        <div key={projectPosts[projectName].id}>
          <h3>{projectPosts[projectName].childMarkdownRemark.frontmatter.headline}</h3>
          <div 
            dangerouslySetInnerHTML={{ __html: projectPosts[projectName].childMarkdownRemark.html }}
          ></div>
        </div>
      )}

      { /* Work Experience section */ }
      <h2>Work Experience</h2>
      {workOrder.map((workName) =>
        <div key={workPosts[workName].id}>
          <h3>{workPosts[workName].childMarkdownRemark.frontmatter.headline}</h3>
          <div 
            dangerouslySetInnerHTML={{ __html: workPosts[workName].childMarkdownRemark.html }}
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
  site {
    siteMetadata {
      socialLinks {
        email
        linkedin
        github
        codepen
      }
    }
  }
}
`

export default IndexPage
