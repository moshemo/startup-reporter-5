import styled, { css } from 'styled-components'

import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

export const boxCSS = css(
  { boxSizing: 'border-box', margin: 0, minWidth: 0 },
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography
  )
)

export const Box = styled.div`
  ${boxCSS}
`
