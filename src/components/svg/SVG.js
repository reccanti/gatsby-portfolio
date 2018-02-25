import React from 'react'
import PropTypes from 'prop-types'

/**
 * Generates a somewhat unique ID for labeling purposes
 */
function generateUniqueId(property) {
  // temp until I can find something better
  return `${property.replace(/[^0-9a-z]/gi, '')}-id`
}

/**
 * Generate aria label if title and description are provided
 */
function generateAriaLabel(title, description) {
  let attribute = {}
  if (title || description) {
    attribute['aria-labelledby'] = ''
    if (title) attribute['aria-labelledby'] += `${generateUniqueId(title)} `
    if (description)
      attribute['aria-labelledby'] += `${generateUniqueId(description)}`
  }
  return attribute
}

/**
 * A utility component to handle the creation of
 * accessible SVG elements
 */
const SVG = ({ title, description, ...props }) => {
  return (
    <svg {...generateAriaLabel(title, description)} {...props}>
      {title && <title id={generateUniqueId(title)}>{title}</title>}
      {description && (
        <description id={generateUniqueId(description)}>
          {description}
        </description>
      )}
      {props.children}
    </svg>
  )
}

export default SVG
