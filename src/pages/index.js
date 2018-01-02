import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/icon-final.svg'

/**
 * Filter post data into a list in the specified order
 */
function filterPosts(items, nodeArray, metaArray) {

  // TODO turn this into a generic function that maps several data
  // arrays into a common object
    
  // make a list of item html in the specified order
  let compiledItems = nodeArray.reduce((accumulator, value) => {
    const { node } = value
    if (items[node.portfolio_entry]) {
      if (items[node.portfolio_entry].entry === node.name) {
        accumulator[node.portfolio_entry] = node
      }
    }
    return accumulator
  })

  // add metadata to the items list
  compiledItems = metaArray.reduce((accumulator, value) => {
    const { node } = value
    accumulator[node.entry_id] = Object.assign({}, accumulator[node.entry_id], node)
    return accumulator
  }, compiledItems)

  
  return compiledItems
}

// specify the content to display for work and projects
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
    entry:"collaboration"
  }
}

const projects = {
  "learnVCS": {
    entry:"base"
  },
  "theVirtualHeart": {
    entry: "base"
  },
  "inspire": {
    entry:"base"
  },
  "swipeRogue": {
    entry:"base"
  }
}

const codePens = {
    "danceAllNight": {
        entry:"base"
    },
    "rainbow": {
        entry:"base"
    },
    "wave": {
        entry:"base"
    },
    "orderedListHacks": {
        entry:"base"
    }
}

const IndexPage = ({ data }) => {
 
  // const workOrder = ["fitbit", "globalThinking", "ADS", "cathedralCorporation"]
  // const workPosts = filterPosts(work, data.allFile.edges, data.allMetaJson.edges)

  const projectOrder = ["theVirtualHeart","learnVCS", "inspire", "swipeRogue"]
  const projectPosts = filterPosts(projects, data.allFile.edges, data.allMetaJson.edges)

  const codePenOrder = ["danceAllNight","rainbow","wave","orderedListHacks"]
  const codePenPosts = filterPosts(codePens, data.allFile.edges, data.allMetaJson.edges)

  return (
    <div>

      { /* about section */ }
      <section className="about">
	<img src={logo} alt="My personal logo"/>
        <h1>Ben Wilcox</h1>
        <ul>
          <li><a href={data.site.siteMetadata.socialLinks.linkedin}>LinkedIn</a></li>
          <li><a href={data.site.siteMetadata.socialLinks.github}>GitHub</a></li>
          <li><a href={data.site.siteMetadata.socialLinks.codepen}>CodePen</a></li>
        </ul>
        <p>I'm a web developer, designer, and beanie enthusiast based in Boston, Massachusetts. Check out some of the projects I've worked on <a href="#projects">below!</a> Want to get in touch? Email me <a href="mailto:reccanti@gmail.com">at this address</a> or send me a message on LinkedIn.</p>
      </section>

      { /* Projects section */ }
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <p>I mostly work do web development, but I also like to branch out and explore other aspects of software development. Below are some of the larger software projects I've worked on.</p>
        {projectOrder.map((projectName) =>
          <div key={projectPosts[projectName].id}>
            <h3>{projectPosts[projectName].childMarkdownRemark.frontmatter.headline}</h3>
	    {/* div className="role">{ projectPosts[projectName].role }</div> */} 
	    <div className="meta">
		<div className="timeframe">{ `${projectPosts[projectName].startDate} - ${projectPosts[projectName].endDate}` }</div>
		{ projectPosts[projectName].tools ? (
		<ul className="tools">
		    {projectPosts[projectName].tools.map(tool =>
		    <li key={tool}>{tool}</li>
		    )}
		</ul>
		) : null }
	    </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: projectPosts[projectName].childMarkdownRemark.html }}></div>
            {projectPosts[projectName].outerLink ? (<a className="outsideLink" href={projectPosts[projectName].outerLink}>View Project</a>) : null}
          </div>
        )}
      </section>
      
      { /* CodePen section */ }
      <section className="projects" id="codePen">
        <h2>CodePen Experiments</h2>
        <p>I like to explore new ideas and technology on CodePen. Below are some of my more popular and interesting pens.</p>
        {codePenOrder.map((projectName) =>
          <div key={codePenPosts[projectName].id}>
            <h3>{codePenPosts[projectName].childMarkdownRemark.frontmatter.headline}</h3>
	    {/* div className="role">{ projectPosts[projectName].role }</div> */} 
	    <div className="meta">
		{ codePenPosts[projectName].tools ? (
		<ul className="tools">
		    {codePenPosts[projectName].tools.map(tool =>
		    <li key={tool}>{tool}</li>
		    )}
		</ul>
		) : null }
	    </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: codePenPosts[projectName].childMarkdownRemark.html }}></div>
          </div>
        )}
      </section>

      { /* Work Experience section */ }
      { /* <section>
        <h2>Work Experience</h2>
        {workOrder.map((workName) =>
          <div key={workPosts[workName].id}>
            <h3>{workPosts[workName].childMarkdownRemark.frontmatter.headline}</h3>
            <div 
              dangerouslySetInnerHTML={{ __html: workPosts[workName].childMarkdownRemark.html }}
            ></div>
          </div>
        )}
      </section> */ }
      
    </div>
  )
}

export const query = graphql`
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
        thumbnail {
            url
            alt
        }
      }
    }  
  }
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
