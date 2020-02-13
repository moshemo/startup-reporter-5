import React from 'react'

import {
  List,
  ListHeader,
  ListItem,
  ListTitle,
  ListExcerpt,
} from 'Shared/components'

import { listArticles } from 'Data'

export const NewsArticles = () => (
  <>
    <List>
      <ListHeader to="/news/popular">Most Popular</ListHeader>
      {listArticles.map(article => (
        <ListItem to={`/news/articles/${article.link}`} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </List>

    <List>
      <ListHeader to="/news/latest">Latest News</ListHeader>
      {listArticles.map(article => (
        <ListItem to={`/news/articles/${article.link}`} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </List>
  </>
)
