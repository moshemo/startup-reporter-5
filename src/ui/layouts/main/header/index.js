import React from 'react'
import styled, { css } from 'styled-components'

import { FaCaretDown as CaretDown } from 'react-icons/fa'
import { MdMenu as MenuIcon } from 'react-icons/md'

import { Dropdown, Menu, Navbar } from 'Components'
import { Button, Icon, Link, Spacer } from 'Elements'

import { breakpoints as bp, grey, primary } from 'Vars'

import { menuLinkItems } from './data'

const navbarCSS = css`
  background-color: ${primary.m800};
  padding: 0 24px;

  @media (min-width: ${bp.md}) {
    padding: 0 64px;
  }
`

const menuLinksSpaceHeight = '16px'

const menuLinksCSS = css`
  color: ${grey.m100};
  display: none;
  padding: ${menuLinksSpaceHeight} 20px;

  @media (min-width: ${bp.md}) {
    display: block;
  }

  :focus,
  :hover {
    background-color: ${primary.m700};
    color: ${grey.m100};
  }
`

const subMenuCSS = css`
  min-width: 200px;
  background-color: ${primary.m700};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16);
`

const subMenuLinksCSS = css`
  ${menuLinksCSS};
  :hover {
    background-color: ${primary.m800};
  }
`

const caretDownCSS = css`
  margin-left: 8px;
  margin-right: -8px;
  position: relative;
  top: 2px;
`

const menuIconCSS = css`
  color: ${grey.m300};
  cursor: pointer;
  font-size: 24px;
  margin-top: ${menuLinksSpaceHeight};
  margin-bottom: ${menuLinksSpaceHeight};
  :hover {
    color: ${grey.m100};
  }
  @media (min-width: ${bp.md}) {
    display: none;
  }
`

export const Header = ({ children }) => {
  return (
    <header>
      <Navbar css={navbarCSS}>
        <Logo linkTo="/">
          Startup<span>Reporter</span>
        </Logo>

        {menuLinkItems.map(item =>
          item.sublinks ? (
            <Dropdown
              key={item.key}
              title={item.title}
              as="a"
              link={item.to}
              titleCss={menuLinksCSS}
              icon={<CaretDown css={caretDownCSS} />}
              menuCss={subMenuCSS}
            >
              {item.sublinks.map(sublink => (
                <Link to={sublink.to} css={subMenuLinksCSS} key={sublink.key}>
                  {sublink.title}
                </Link>
              ))}
            </Dropdown>
          ) : (
            <Link to={item.to} css={menuLinksCSS} key={item.key}>
              {item.title}
            </Link>
          )
        )}
        <MenuIcon css={menuIconCSS} />
      </Navbar>
    </header>
  )
}

export const Logo = styled(Link)`
  color: ${grey.m300};
  flex-grow: 1;
  text-transform: uppercase;
  user-select: none;

  :hover {
    color: ${grey.m300};
  }

  span {
    color: ${grey.m100};
  }
`
