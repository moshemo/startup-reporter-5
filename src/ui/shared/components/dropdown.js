import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

  const handleMouseOver = () => setIsOpen(state => true)
  const handleMouseOut = () => setIsOpen(state => false)

  return (
    <DropdownBase
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      className="dropdown-base"
    >
      <Trigger
        className="dropdown-trigger"
        to={titleLink}
        tabIndex="0"
        {...props}
      >
        <span>{title}</span>
        {icon}
      </Trigger>
      <Submenu className="dropdown-submenu" css={menuCss} open={isOpen}>
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

const Trigger = styled(Link)`
  outline: 0;
  :focus {
    outline: 0;
  }
`

const Submenu = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;

  /* ${Link} {
    display: inline-block;
    width: 100%;
  } */
`
