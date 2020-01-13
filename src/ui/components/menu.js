import React from 'react'
import styled, { css } from 'styled-components'

import { Link } from 'Elements'

const Menu = styled.div(
  ({ horizontal }) => css`
    ${Link} {
      ${horizontal && `display: inline-block;`}
    }
  `
)

const Dropdown = ({
  as,
  titleCss,
  title,
  to,
  icon,
  menuCss,
  children,
  open,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => setIsOpen(state => !state)
  const handleBlur = () => setIsOpen(state => false)
  const handleMouseOver = () => setIsOpen(state => true)
  const handleMouseOut = () => setIsOpen(state => false)

  return (
    <DropdownBase>
      <Trigger
        as={as}
        to="/advertise"
        css={titleCss}
        onClick={handleClick}
        onBlur={handleBlur}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      >
        <span>{title}</span>
        {icon}
      </Trigger>
      <Submenu css={menuCss} open={isOpen}>
        {children}
      </Submenu>
    </DropdownBase>
  )
}

const DropdownBase = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 10;
`

const Trigger = styled(Link)``

const Submenu = styled.div`
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

// const DropdownOLD = ({
//   as = 'button',
//   css,
//   children,
//   open,
//   title,
//   ...props
// }) => (
//   <DropdownBase>
//     <DropLink as={as} bg="inherit" border="none" css={css} {...props}>
//       {title}
//     </DropLink>
//     {children}
//   </DropdownBase>
// )

export { Menu, Dropdown }
