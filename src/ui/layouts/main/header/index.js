import React from 'react'
import styled, { css } from 'styled-components'

import { FaCaretDown as CaretDown } from 'react-icons/fa'

import { Dropdown, Menu, Submenu, useMenu, Navbar } from 'Components'
import { Button, Icon, Link, Spacer } from 'Elements'

import { grey, primary } from 'Vars'

import { menuLinkItems } from './data'

const menuLinksCSS = css`
  color: ${grey.m100};
  padding: 16px 24px;

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
  margin-left: 12px;
  margin-right: -12px;
  position: relative;
  top: 2px;
`

export const Header = ({ children }) => {
  const [open, setOpen] = useMenu(false)

  return (
    <header>
      <Navbar
        css={`
          background-color: ${primary.m800};
          padding: 0 64px;
        `}
      >
        <Logo linkTo="/" flexGrow="1">
          Startup<span>Reporter</span>
        </Logo>

        {menuLinkItems.map(item =>
          item.sublinks ? (
            <Dropdown key={item.key}>
              <Link
                linkTo={item.to}
                css={menuLinksCSS}
                onClick={() => setOpen(state => !state)}
                onBlur={() => setOpen(false)}
              >
                {item.title}
                <CaretDown css={caretDownCSS} />
              </Link>
              <Submenu css={subMenuCSS} open={open}>
                {item.sublinks.map(sublink => (
                  <Link to={sublink.to} css={subMenuLinksCSS} key={sublink.key}>
                    {sublink.title}
                  </Link>
                ))}
              </Submenu>
            </Dropdown>
          ) : (
            <Link to={item.to} css={menuLinksCSS} key={item.key}>
              {item.title}
            </Link>
          )
        )}
      </Navbar>
    </header>
  )
}

export const Logo = styled(Link)`
  color: ${grey.m300};
  text-transform: uppercase;

  span {
    color: ${grey.m100};
  }
`
