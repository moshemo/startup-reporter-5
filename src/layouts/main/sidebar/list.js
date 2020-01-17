import React from 'react'
import { css } from 'styled-components'

import {
  List as ListComp,
  ListHeader,
  ListItem,
  ListTitle,
  ListExcerpt,
} from 'Components'

import { listArticles } from 'Data'

const listHeaderStyles = css`
  margin-top: 60px;
`

export const List = () => (
  <>
    <ListComp>
      <ListHeader css={listHeaderStyles} to="/news/popular">
        Most Popular
      </ListHeader>
      {listArticles.map(article => (
        <ListItem to={article.link} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </ListComp>

    <ListComp>
      <ListHeader to="/news/latest">Latest News</ListHeader>
      {listArticles.map(article => (
        <ListItem to={article.link} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </ListComp>
  </>
)
