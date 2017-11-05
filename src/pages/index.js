import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const posts = data.allFile.edges
  console.log(React.version);
  return (
    <div>
      {posts.map(({ node }) =>
        <div>
          <h2>{node.childMarkdownRemark.frontmatter.headline}</h2>
          <div 
            key={node.id} 
            dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
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
