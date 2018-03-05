/**
 * Defines components that should be used for controlling and updating a Palette component on
 * the CMS
 */
import React from 'react'
import CMS from 'netlify-cms'
import { Palette, Color } from './palette' 

let ListControl = CMS.getWidget("list").control
const PaletteControl = props => {
    return <ListControl {...props} />
}

const PalettePreview = props => {
    return (
        <Palette width="100%" height={100} title={`Color Palette`}>
            {props.value.map(color => (
                <Color hex={color.get("color")} size={Number(color.get("width"))} />
            ))}
        </Palette>
    )
}

export { PaletteControl, PalettePreview }
