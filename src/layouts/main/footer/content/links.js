import React from 'react'
import styled from 'styled-components'

import { MdChevronRight } from 'react-icons/md'
import { FaAngleRight } from 'react-icons/fa'

import { menuLinks } from 'Data'
import { Container, Link } from 'Elements'
import { breakpoints as bp, colors } from 'Vars'

import { Title } from './styles'

export const Links = () => (
  <Base>
    <Title>Browse the Site</Title>
    <List>
      {menuLinks.map(item => (
        <ListItem to={item.to} title={item.title} key={item.key} />
      ))}
    </List>
  </Base>
)

const ListItemComp = ({ className, to, title }) => (
  <ListItemBase className={className}>
    <AngleRight className="icon" />
    <Link className="link" to={to}>
      {title}
    </Link>
  </ListItemBase>
)

const Base = styled.div`
  color: #fff;
  grid-area: links;
`

const List = styled.ul``

const ListItemBase = styled.li``

const ListItem = styled(ListItemComp)`
  .icon {
    color: ${colors.grey.m400};
    font-size: 18px;
    font-weight: 700;
    margin-right: 5px;
    :focus {
      outline: 0;
    }
  }

  .link {
    color: ${colors.grey.m400};
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;

    :focus {
      outline: 0;
      color: ${colors.accent.a400};
    }
  }

  :focus,
  :hover {
    .icon,
    .link {
      color: ${colors.accent.a400};
    }
  }
`

const AngleRight = styled(FaAngleRight)`
  display: none;

  @media (min-width: ${bp.md}) {
    display: inline;
  }
`
