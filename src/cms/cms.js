import CMS from 'netlify-cms'
import { PalettePreview } from '../components/palette-blog/palette-cms'

CMS.registerWidget("palette", CMS.getWidget("list").control, PalettePreview)
