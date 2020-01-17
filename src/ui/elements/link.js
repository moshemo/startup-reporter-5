import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const Link = styled(GatsbyLink)`
  ::moz-focus-inner {
    border: 0;
  }

  ${props =>
    props.horizontal &&
    `
      display: inline-block;
    `}
`
