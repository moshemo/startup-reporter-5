import React from 'react'
import styled from 'styled-components'

import { Link } from 'Elements'

export const List = ({ className, listHeader, listTitle, listExcerpt }) => (
  <Base className={className}>
    <Header className="header">{listHeader}</Header>
    <Item className="item">
      <Title className="item">{listTitle}</Title>
      <Excerpt className="item">{listExcerpt}</Excerpt>
    </Item>
  </Base>
)

const Base = styled.div.attrs({
  role: 'list',
})``

const Header = styled.div``
const Item = styled(Link)``
const Title = styled.h4``
const Excerpt = styled.div``
