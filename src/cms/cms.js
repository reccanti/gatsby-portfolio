import React from 'react'
import CMS from 'netlify-cms'
import { PaletteControl, PalettePreview } from '../components/palette-blog/palette-cms'

CMS.registerWidget("palette", PaletteControl, PalettePreview)
