import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'
import mainTheme from '../../../theme'
import { Dropdown } from 'Shared/components'
import { menuLinks } from 'Data'

export const Menu = props => (
  <MenuBase role="navigation" aria-label="main navigation">
    {menuLinks.map(item =>
      item.sublinks ? (
        <Dropdown
          icon={<CaretDown />}
          title={item.title}
          titleLink={`/${item.to}`}
          key={item.key}
        >
          {item.sublinks.map(sublink => (
            <MenuLink to={`/${sublink.to}`} key={sublink.key}>
              {sublink.title}
            </MenuLink>
          ))}
        </Dropdown>
      ) : (
        <MenuLink to={`/${item.to}`} key={item.key}>
          {item.title}
        </MenuLink>
      )
    )}
  </MenuBase>
)

// ------- STYLES -------
const {
  breakpoints: { md },
  colors: { light, primary },
} = mainTheme

const CaretDown = styled(FaCaretDown)`
  margin-left: 8px;
  margin-right: -8px;
  position: relative;
  top: 2px;
`

const MenuLinkCSS = css`
  color: ${light};
  padding: 16px 20px;
  text-decoration: none;
  text-transform: uppercase;

  :focus,
  :hover {
    background-color: ${primary.base};
    color: ${light};
  }
`

export const MenuLink = styled(Link)`
  ${MenuLinkCSS};
`

export const MenuBase = styled.nav`
  display: none;

  @media (min-width: ${md}) {
    display: flex;
    align-items: center;
  }

  .dropdown-base {
    :hover {
      > .dropdown-trigger {
        background-color: ${primary.base};
      }
    }
  }

  .dropdown-trigger {
    ${MenuLinkCSS};
  }

  .dropdown-submenu {
    min-width: 200px;
    background-color: ${primary.base};
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16);

    ${MenuLink} {
      display: inline-block;
      width: 100%;
      :hover {
        background-color: ${primary.dark};
      }
    }
  }
`
