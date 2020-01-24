import React from 'react'

import {
  List as ListComp,
  ListHeader,
  ListItem,
  ListTitle,
  ListExcerpt,
} from 'Components'

import { listArticles } from 'Data'

export const List = () => (
  <>
    <ListComp>
      <ListHeader to="/news/popular">Most Popular</ListHeader>
      {listArticles.map(article => (
        <ListItem to={`/news/articles/${article.link}`} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </ListComp>

    <ListComp>
      <ListHeader to="/news/latest">Latest News</ListHeader>
      {listArticles.map(article => (
        <ListItem to={`/news/articles/${article.link}`} key={article.key}>
          <ListTitle>{article.title}</ListTitle>
          <ListExcerpt>{article.excerpt}</ListExcerpt>
        </ListItem>
      ))}
    </ListComp>
  </>
)
