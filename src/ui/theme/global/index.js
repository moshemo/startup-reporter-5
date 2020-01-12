import { createGlobalStyle } from 'styled-components'

import minireset from 'minireset.css'

import { Base } from './parts/base'
import { Code } from './parts/code'
import { Fonts } from './parts/fonts'
import { Hr } from './parts/hr'
import { Img } from './parts/img'
import { Inputs } from './parts/inputs'
import { Link } from './parts/link'
import { Table } from './parts/table'

export const GlobalCss = createGlobalStyle`
  ${minireset}
  ${Base}
  ${Code}
  ${Fonts}
  ${Hr}
  ${Img}
  ${Inputs}
  ${Link}
  ${Table}
`
