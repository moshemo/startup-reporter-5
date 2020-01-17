import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import { MdMenu } from 'react-icons/md'

import { Link } from 'Elements'
import { breakpoints as bp, grey } from 'Vars'

import { menuLinks } from 'Data'

export const Mobile = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const mobileMenuAnimation = useSpring({
    transform: isMobileMenuOpen ? `translateX(0)` : `translateX(-100%)`,
  })

  return (
    <>
      <MobileToggle onClick={() => setMobileMenuOpen(state => !state)} />
      <AnimatedMobileMenu style={mobileMenuAnimation}>
        {menuLinks.map(item => (
          <MobileLink to={item.to}>{item.title}</MobileLink>
        ))}
      </AnimatedMobileMenu>
    </>
  )
}

// ------- STYLES -------
const MobileToggle = styled(MdMenu)`
  color: ${grey.m300};
  cursor: pointer;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  z-index: 20;
  :hover {
    color: ${grey.m100};
  }
  @media (min-width: ${bp.md}) {
    display: none;
  }
`

const MobileMenu = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #424242;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  width: 100%;

  @media (min-width: ${bp.md}) {
    display: none;
  }
`

const AnimatedMobileMenu = animated(MobileMenu)

const MobileLink = styled(Link)`
  border-radius: 8px;
  color: #fafafa;
  display: block;
  font-size: 15px;
  margin: 0;
  padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  width: 200px;

  :hover {
    background-color: #545454;
    color: #fafafa;
  }
`
