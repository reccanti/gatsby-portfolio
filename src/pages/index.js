import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from './index-layout';
import logo from '../images/icon-final.svg'

import styles from './landing.module.css'

/**
 * Filter post data into a list in the specified order
 */
function filterPosts(items, nodeArray, metaArray) {
  // TODO turn this into a generic function that maps several data
  // arrays into a common object

  // make a list of item html in the specified order
  let compiledItems = nodeArray.reduce((accumulator, value) => {
    const { node } = value
    if (items[node.portfolio_entry] && node.portfolio_entry !== 'posts') {
      if (items[node.portfolio_entry].entry === node.name) {
        accumulator[node.portfolio_entry] = node
      }
    }
    return accumulator
  })

  // add metadata to the items list
  compiledItems = metaArray.reduce((accumulator, value) => {
    const { node } = value
    accumulator[node.entry_id] = Object.assign(
      {},
      accumulator[node.entry_id],
      node
    )
    return accumulator
  }, compiledItems)

  return compiledItems
}

// specify the content to display for work and projects
// const work = {
//   cathedralCorporation: {
//     entry: 'customer',
//   },
//   ADS: {
//     entry: 'customer',
//   },
//   globalThinking: {
//     entry: 'stack',
//   },
//   fitbit: {
//     entry: 'collaboration',
//   },
// }

const projects = {
  learnVCS: {
    entry: 'base',
  },
  theVirtualHeart: {
    entry: 'base',
  },
  inspire: {
    entry: 'base',
  },
  swipeRogue: {
    entry: 'base',
  },
}

const codePens = {
  danceAllNight: {
    entry: 'base',
  },
  rainbow: {
    entry: 'base',
  },
  wave: {
    entry: 'base',
  },
  orderedListHacks: {
    entry: 'base',
  },
}

const query = graphql`
  query myQuery {
    allMetaJson {
      edges {
        node {
          role
          startDate
          endDate
          tools
          entry_id
          outerLink
          slug
          thumbnail {
            url
            alt
          }
        }
      }
    }
    allFile(
      filter: { name: { ne: ".DS_Store" }, relativeDirectory: { ne: "posts" } }
    ) {
      edges {
        node {
          id
          name
          portfolio_entry: relativeDirectory
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

const IndexPage = ({ data }) => {


  return (
    <StaticQuery query={query} render={data => {

      const projectOrder = ['theVirtualHeart', 'learnVCS', 'inspire', 'swipeRogue']
      const projectPosts = filterPosts(
        projects,
        data.allFile.edges,
        data.allMetaJson.edges
      )

      const codePenOrder = ['danceAllNight', 'rainbow', 'wave', 'orderedListHacks']
      const codePenPosts = filterPosts(
        codePens,
        data.allFile.edges,
        data.allMetaJson.edges
      );
      return (
        <Layout>
          <main id="main-content" className={styles.index}>
            {/* about section */}
            <section className={styles.about}>
              <img src={logo} alt="My personal logo" />
              <h1>Blair Wilcox</h1>
              <ul>
                <li>
                  <a href={data.site.siteMetadata.socialLinks.linkedin}>LinkedIn</a>
                </li>
                <li>
                  <a href={data.site.siteMetadata.socialLinks.github}>GitHub</a>
                </li>
                <li>
                  <a href={data.site.siteMetadata.socialLinks.codepen}>CodePen</a>
                </li>
                <li>
                  <a href={`mailto:${data.site.siteMetadata.socialLinks.email}`}>
                    Email
              </a>
                </li>
                <p>
                  She/her/hers
              </p>
              </ul>
              <p>
                I'm a web developer, designer, and beanie enthusiast based in Boston,
                Massachusetts. Check out some of the projects I've worked on below!
                Want to get in touch? Just send me an email at the address above.
          </p>
            </section>

            {/* Projects section */}
            <section className={styles.projects} id="projects">
              <h2>Projects</h2>
              <p>
                I do a lot of web development, but I like to explore other aspects of
                software development as well. Below are some of the larger software
                projects I've worked on.
          </p>
              {projectOrder.map(projectName => (
                <div key={projectPosts[projectName].id}>
                  <h3>
                    {
                      projectPosts[projectName].childMarkdownRemark.frontmatter
                        .headline
                    }
                  </h3>
                  {/* div className="role">{ projectPosts[projectName].role }</div> */}
                  <div className={styles.meta}>
                    <div className={styles.timeframe}>{`${
                      projectPosts[projectName].startDate
                      } - ${projectPosts[projectName].endDate}`}</div>
                    {projectPosts[projectName].tools ? (
                      <ul className={styles.tools}>
                        {projectPosts[projectName].tools.map(tool => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: projectPosts[projectName].childMarkdownRemark.html,
                    }}
                  />
                  {projectPosts[projectName].outerLink ? (
                    <a
                      className={styles.outsideLink}
                      href={projectPosts[projectName].outerLink}
                    >
                      View Project
                </a>
                  ) : null}
                </div>
              ))}
            </section>

            {/* CodePen section */}
            <section className={styles.projects} id="codePen">
              <h2>CodePen Experiments</h2>
              <p>
                I like to explore new ideas and technology on CodePen. Below are some
                of my more popular and interesting pens.
          </p>
              {codePenOrder.map(projectName => (
                <div key={codePenPosts[projectName].id}>
                  <p
                    data-height="300"
                    data-theme-id="25581"
                    data-slug-hash={codePenPosts[projectName].slug}
                    data-default-tab="result"
                    data-user="reccanti"
                    data-embed-version="2"
                    data-pen-title={
                      codePenPosts[projectName].childMarkdownRemark.frontmatter
                        .headline
                    }
                    className="codepen"
                  >
                    See the Pen{' '}
                    <a
                      href={`https://codepen.io/reccanti/pen/${
                        codePenPosts[projectName].slug
                        }/`}
                    >
                      {
                        codePenPosts[projectName].childMarkdownRemark.frontmatter
                          .headline
                      }
                    </a>{' '}
                    by B Wilcox (<a href="https://codepen.io/reccanti">@reccanti</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </p>
                  <h3>
                    {
                      codePenPosts[projectName].childMarkdownRemark.frontmatter
                        .headline
                    }
                  </h3>
                  {/* div className="role">{ projectPosts[projectName].role }</div> */}
                  <div className={styles.meta}>
                    {codePenPosts[projectName].tools ? (
                      <ul className={styles.tools}>
                        {codePenPosts[projectName].tools.map(tool => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: codePenPosts[projectName].childMarkdownRemark.html,
                    }}
                  />
                </div>
              ))}

              <script
                async
                src="https://production-assets.codepen.io/assets/embed/ei.js"
              />
            </section>
            {/* Work Experience section */}
            {/* <section>
                <h2>Work Experience</h2>
                {workOrder.map((workName) =>
                <div key={workPosts[workName].id}>
                <h3>{workPosts[workName].childMarkdownRemark.frontmatter.headline}</h3>
                <div 
                dangerouslySetInnerHTML={{ __html: workPosts[workName].childMarkdownRemark.html }}
                ></div>
                </div>
                )}
                </section> */}
          </main>
        </Layout>
      )
    }} />)
}

export default IndexPage
