import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { boxCSS } from 'Elements'

export const Link = styled(GatsbyLink)(
  ({ horizontal }) => css`
    ::moz-focus-inner {
      border: 0;
    }

    ${horizontal && `display: inline-block;`}

    ${boxCSS}
  `
)
