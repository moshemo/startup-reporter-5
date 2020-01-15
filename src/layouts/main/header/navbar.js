import styled from 'styled-components'

import { Navbar as NavbarComp } from 'Components'

import { breakpoints as bp, primary } from 'Vars'

export const Navbar = styled(NavbarComp)`
  background-color: ${primary.m800};
  padding: 0 24px;

  @media (min-width: ${bp.md}) {
    padding: 0 64px;
  }
`
