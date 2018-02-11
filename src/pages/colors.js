import React from 'react' 

const ColorPage = ({ data }) => {

    const { edges: entries } = data.allMarkdownRemark

    return (
        <main>
            <h1>Colors</h1>
            <ul>
              {entries.map(({ node: entry }) => (
                  <article>
                    <h2>{entry.frontmatter.title}</h2>
                    <p/>
                        Hello
                    <p/>
                  </article>
              ))}
            </ul>
        </main>
    )
}

export const query = graphql`
query colorBlogQuery {
  allMarkdownRemark(filter:{
    frontmatter:{
      category:{
        eq:"Colors"
      }
    }
  }) {
    edges {
      node {
        frontmatter {
          category
          title
        }
      }
    }
  }
}`

export default ColorPage
