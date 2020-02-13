import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { animated, useSpring } from 'react-spring'
import { MdMenu } from 'react-icons/md'
import mainTheme from '../../../theme'
import { menuLinks } from 'Data'

// ------ MAIN COMPONENT -------
export const Mobile = props => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const mobileMenuAnimation = useSpring({
    transform: isMobileMenuOpen ? `translateX(0)` : `translateX(-100%)`,
  })

  return (
    <>
      <MobileToggle onClick={() => setMobileMenuOpen(state => !state)} />
      <AnimatedMobileMenu style={mobileMenuAnimation}>
        {menuLinks.map(item => (
          <MobileLink to={`/${item.to}`} key={item.key}>
            {item.title}
          </MobileLink>
        ))}
      </AnimatedMobileMenu>
    </>
  )
}

// ------- CONST -------
const {
  breakpoints: { md },
  colors: { dark, grey, light, offBlack, offWhite },
} = mainTheme

const MobileMenu = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${dark};

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  width: 100%;

  @media (min-width: ${md}) {
    display: none;
  }
`

// ------- SPRING ANIMATED BEGIN -------

const AnimatedMobileMenu = animated(MobileMenu)

// ------- SPRING ANIMATED END -------

export const MobileLink = styled(Link)`
  border-radius: 8px;
  color: ${offWhite};
  display: block;
  font-size: 15px;
  margin: 0;
  padding: 12px 0;
  text-align: center;
  text-transform: uppercase;
  width: 200px;

  :hover {
    background-color: ${offBlack};
    color: ${offWhite};
  }
`

const MobileToggle = styled(MdMenu)`
  color: ${grey.light};
  cursor: pointer;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  z-index: 20;
  :hover {
    color: ${light};
  }
  @media (min-width: ${md}) {
    display: none;
  }
`
