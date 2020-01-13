import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Box, boxCSS } from 'Elements'

import { colors } from '../theme/variables/colors'

console.log('colors from navbar: ', colors)

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
