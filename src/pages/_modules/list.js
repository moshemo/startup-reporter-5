import React from 'react'
import styled from 'styled-components'

import { colors } from 'Vars'

import {
  List as ListComp,
  ListHeader,
  ListItem,
  ListTitle,
  ListExcerpt,
} from 'Components'

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

const ListBase = styled(ListComp)`
  border-bottom-color: ${colors.grey.m200};

  flex-basis: 450px;
  flex-grow: 1;
  flex-shrink: 1;

  margin: 0 12px;

  .list-item {
    :focus,
    :hover {
      background-color: ${colors.grey.m100};
    }
  }
`
