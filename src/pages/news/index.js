import React from 'react'

import SidebarRight from 'Layouts/main/sidebar-right'
import SEO from 'Components/seo'

import { List } from '../_modules/list'
import { ListWrapper } from '../_styles'

const IndexPage = () => (
  <SidebarRight>
    <SEO title="Home" />
    <ListWrapper>
      <List cat="latest" name="Latest News" />
      <List cat="featured" name="Featured Stories" />
      <List cat="industry/name-1" name="Industry Name 1" />
      <List cat="industry/name-2" name="Industry Name 2" />
      <List cat="industry/name-3" name="Industry Name 3" />
      <List cat="industry/name-4" name="Industry Name 4" />
      <List cat="industry/name-5" name="Industry Name 5" />
      <List cat="industry/name-6" name="Industry Name 6" />
      <List cat="industry/name-7" name="Industry Name 7" />
      <List cat="industry/name-8" name="Industry Name 8" />
      <List cat="industry/name-9" name="Industry Name 9" />
    </ListWrapper>
  </SidebarRight>
)

export default IndexPage
