import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Layout from './color-layout';
import PaletteBlogEntry from '../components/palette-blog/palette-blog-entry'
import Footer from '../components/footer/footer'

import styles from './colors.module.scss'

const query = graphql`
  query colorBlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Colors" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
  }
`

const ColorPage = () => {
  return (
    <StaticQuery query={query} render={data => {
      const { edges: entries } = data.allMarkdownRemark;
      return (
        <Layout>
          <main id="main-content" className={styles.colorPage}>
            <header>
              <h1>Colors</h1>
              <p>Writing about colors, art and other things.</p>
            </header>
            <ul>
              {entries.map(({ node: entry }) => (
                <li key={entry.id}>
                  <PaletteBlogEntry entry={entry} />
                </li>
              ))}
            </ul>
            <Footer />
          </main>
        </Layout>
      )
    }} />
  )
}


export default ColorPage
