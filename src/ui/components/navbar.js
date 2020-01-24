import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Box, boxCSS } from 'Elements'

export const Navbar = styled.nav.attrs(props => ({
  role: 'navigation',
  ariaLabel: 'main navigation',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${boxCSS}
`

export const Logo = ({ children, linkTo, ...props }) => (
  <Box {...props}>
    <Link to={linkTo}>{children}</Link>
  </Box>
)
