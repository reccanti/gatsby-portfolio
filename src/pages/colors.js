import React from 'react' 
import PaletteEntry from '../components/palette-blog'

import styles from './colors.module.scss'

const ColorPage = ({ data }) => {

    const { edges: entries } = data.allMarkdownRemark

    return (
        <main className={styles.colorPage}>
            <h1>Colors</h1>
            <ul>
              {entries.map(({ node: entry }) => (
                <li key={entry.id}>
                    <PaletteEntry entry={entry}/>
                </li>
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
        id
        frontmatter {
          category
          title
          date
          colors {
            color
            width
          }
        }
        html
      }
    }
  }
}`

export default ColorPage
