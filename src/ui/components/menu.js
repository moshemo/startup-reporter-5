import React from 'react'
import styled, { css } from 'styled-components'

import { Box, Link } from 'Elements'

const useMenu = isOpen => {
  const [open, setOpen] = React.useState(isOpen)

  return [open, setOpen]
}

const Menu = styled(Box)(
  ({ horizontal }) => css`
    ${Link} {
      ${horizontal && `display: inline-block;`}
    }
  `
)

const DropdownBase = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 10;
`

const DropLink = styled(Box)`
  cursor: pointer;
`

const Submenu = styled(Box)`
  display: ${props => (props.open ? 'block' : 'none')};

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;

  ${Link} {
    display: inline-block;
    width: 100%;
  }
`

const Dropdown = ({ as = 'button', css, children, open, title, ...props }) => (
  <DropdownBase>
    <DropLink as={as} bg="inherit" border="none" css={css} {...props}>
      {title}
    </DropLink>
    {children}
  </DropdownBase>
)

export { useMenu, Menu, Dropdown, Submenu }
