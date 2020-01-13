import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { boxCSS } from 'Elements'

export const Link = styled(GatsbyLink)`
  ::moz-focus-inner {
    border: 0;
  }

  ${props =>
    props.horizontal &&
    `
      display: inline-block;
    `}

  ${boxCSS}
`
