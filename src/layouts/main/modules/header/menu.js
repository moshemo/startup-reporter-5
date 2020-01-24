import React from 'react'
import styled, { css } from 'styled-components'

import { FaCaretDown } from 'react-icons/fa'

import { Dropdown } from 'Components'

import { Link as LinkElement } from 'Elements'

import { breakpoints as bp, grey, primary } from 'Vars'

import { menuLinks } from 'Data'

export const Menu = () => (
  <MenuBase>
    {menuLinks.map(item =>
      item.sublinks ? (
        <Dropdown
          icon={<CaretDown />}
          title={item.title}
          titleLink={`/${item.to}`}
          key={item.key}
        >
          {item.sublinks.map(sublink => (
            <Link to={`/${sublink.to}`} key={sublink.key}>
              {sublink.title}
            </Link>
          ))}
        </Dropdown>
      ) : (
        <Link to={`/${item.to}`} key={item.key}>
          {item.title}
        </Link>
      )
    )}
  </MenuBase>
)

const LinkCSS = css`
  color: ${grey.m100};
  padding: 16px 20px;

  :focus,
  :hover {
    background-color: ${primary.m700};
    color: ${grey.m100};
  }
`

const Link = styled(LinkElement)`
  ${LinkCSS};
`

const CaretDown = styled(FaCaretDown)`
  margin-left: 8px;
  margin-right: -8px;
  position: relative;
  top: 2px;
`

const MenuBase = styled.div`
  display: none;

  @media (min-width: ${bp.md}) {
    display: flex;
    align-items: center;
  }

  .dropdown-base {
    :hover {
      > .dropdown-trigger {
        background-color: ${primary.m700};
      }
    }
  }

  .dropdown-trigger {
    ${LinkCSS}
  }

  .dropdown-submenu {
    min-width: 200px;
    background-color: ${primary.m700};
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16);

    ${Link} {
      :hover {
        background-color: ${primary.m800};
      }
    }
  }
`
