import React from 'react'
import SkipLink from './src/components/skip-link/skip-link'

exports.onRenderBody = (
  { setPreBodyComponents },
  pluginOptions
) => {
    setPreBodyComponents([
        <a id="skip-link" href="#main-content">Skip To Main Content</a>
    ])
}
