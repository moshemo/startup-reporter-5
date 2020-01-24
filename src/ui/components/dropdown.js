import React from 'react'
import styled from 'styled-components'

import { Link } from 'Elements'

// export const Menu = styled.div`
//   ${Link} {
//     ${props =>
//       props.horizontal &&
//       `
//         display: inline-block;
//     `}
//   }
// `

export const Dropdown = ({
  children,
  icon,
  menuCss,
  open,
  title,
  titleLink,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  // const handleClick = () => setIsOpen(state => !state)
  // const handleBlur = () => setIsOpen(state => false)
  const handleMouseOver = () => setIsOpen(state => true)
  const handleMouseOut = () => setIsOpen(state => false)

  return (
    <DropdownBase
      // onClick={handleClick}
      // onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
    >
      <Trigger to={titleLink} tabIndex="0" {...props}>
        <span>{title}</span>
        {icon}
      </Trigger>
      <Submenu css={menuCss} open={isOpen}>
        {children}
      </Submenu>
    </DropdownBase>
  )
}

const DropdownBase = styled.div.attrs(props => ({
  className: 'dropdown-base',
}))`
  display: inline-flex;
  position: relative;
  z-index: 10;
`

const Trigger = styled(Link).attrs(props => ({
  className: 'dropdown-trigger',
}))`
  outline: 0;
  :focus {
    outline: 0;
  }
`

const Submenu = styled.div.attrs(props => ({
  className: 'dropdown-submenu',
}))`
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
