import React from 'react'

/**
 * Sitewide footer
 */
const Footer = props => {
  return (
    <footer>
      <p>
        The views expressed on this blog are mine and do not necessarily reflect
        the views of my employer, Wayfair, Inc.
      </p>
      <p>
        Source code is available in this{' '}
        <a href="https://github.com/reccanti/gatsby-portfolio">
          GitHub repository
        </a>. Accessibility is really important to me. If you notice any issues,
        please report them in a{' '}
        <a href="https://github.com/reccanti/gatsby-portfolio/issues/new?labels=accessibility">
          preformatted accessibility GitHub Issue
        </a>
      </p>
    </footer>
  )
}

export default Footer
