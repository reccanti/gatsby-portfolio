import React from 'react'
import CMS from 'netlify-cms'
import { PaletteControl, PalettePreview } from '../components/palette-blog/palette-cms'

CMS.registerWidget("palette", CMS.getWidget("list").control, PalettePreview)
