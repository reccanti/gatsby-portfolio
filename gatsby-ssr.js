import React from 'react'

export const onRenderBody = (
  { setPreBodyComponents }
) => {
    setPreBodyComponents([
        <a id="skip-link" href="#main-content">Skip To Main Content</a>
    ])
}
