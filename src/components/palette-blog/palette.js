import React from 'react'
import PropTypes from 'prop-types'
import SVG from '../svg/SVG'

/**
 * Defines an object that will represent a single
 * color on the palette in SVG
 */
const Color = ({ hex, size }) => null
Color.propTypes = {
  hex: PropTypes.string.isRequired,
  size: PropTypes.number,
}
Color.defaultProps = {
  size: 1,
}

/**
 * Defines a Palette object, which is an
 * SVG wrapper that holds Color objects.
 */
const Palette = ({ children, title, ...props }) => {
  /*
     * Get the total size of the palette
     */
  const reduceTotalSize = (accumulator, child) => {
    return accumulator + child.props.size
  }
  const size = React.Children.toArray(children).reduce(reduceTotalSize, 0)

  /*
     * Create new color rectangles from the Color
     * objects that were passed
     */
  let currentPos = 0
  const updatedChildren = React.Children.map(children, (child, i) => {
    const { hex, size } = child.props
    const position = currentPos
    currentPos += size
    return <rect fill={hex} width={size} x={position} y={0} height={1} />
  })

  const colors = React.Children.map(children, child => child.props.hex)

  let paletteDescription = `A color palette consisting of: `
  colors.forEach(color => {
    paletteDescription += `${color}, `
  })

  return (
    <SVG
      title={title}
      description={paletteDescription}
      {...props}
      role="img"
      viewBox={`0 0 ${size} 1`}
      preserveAspectRatio="none"
    >
      {updatedChildren}
    </SVG>
  )
}

Palette.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export { Palette, Color }
