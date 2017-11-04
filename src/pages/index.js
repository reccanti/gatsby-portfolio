import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const posts = data.allFile.edges.filter(({ node }) => node.childMarkdownRemark !== null)
  console.log(posts);
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
  allFile {
    edges {
      node {
        id
        childMarkdownRemark {
          frontmatter {
            headline
          }
          html
        }
      }
    }
  }
}
`

export default IndexPage
