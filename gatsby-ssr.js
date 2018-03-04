import React from 'react'

exports.onRenderBody = (
  { setPreBodyComponents },
  pluginOptions
) => {
    setPreBodyComponents([
        <a id="skip-link" href="#main-content">Skip To Main Content</a>
    ])
}
