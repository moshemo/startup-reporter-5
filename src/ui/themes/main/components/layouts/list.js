import React from 'react'
import styled from 'styled-components'
import mainTheme from '../../theme'

import {
  List as ListComp,
  ListHeader,
  ListItem,
  ListTitle,
  ListExcerpt,
} from 'Shared/components'

import { listArticles } from 'Data'

export const List = ({ cat, name }) => (
  <ListBase>
    <ListHeader to={`/news/${cat}`}>{name}</ListHeader>
    {listArticles.map(article => (
      <ListItem to={`/${article.link}`} key={article.key}>
        <ListTitle>{article.title}</ListTitle>
        <ListExcerpt>{article.excerpt}</ListExcerpt>
      </ListItem>
    ))}
  </ListBase>
)

const {
  colors: { grey, light },
} = mainTheme

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: space-evenly;
  padding: 0 24px;
  max-width: 100;
`

const ListBase = styled(ListComp)`
  border-bottom-color: ${grey.lighter};

  flex-basis: 450px;
  flex-grow: 1;
  flex-shrink: 1;

  margin: 0 12px;

  .list-item {
    :focus,
    :hover {
      background-color: ${light};
    }
  }
`
