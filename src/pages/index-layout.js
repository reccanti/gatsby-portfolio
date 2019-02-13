import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.scss'


const query = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// const Header = props => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {props.title}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={query} render={data => (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div>{children}</div>
    </div>
  )} />
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
