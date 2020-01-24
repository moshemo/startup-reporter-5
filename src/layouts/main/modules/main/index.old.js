import React, { Component } from 'react'
import styled from 'styled-components'

import { List } from './list'
import { breakpoints as bp, colors } from 'Vars'

export const Main = () => (
  <MainBase>
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
  </MainBase>
)

const MainBase = styled.main`
  margin: 50px auto;
  width: 100%;
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: space-evenly;
  padding: 0 24px;
  max-width: 100;
`

//   .list {
//     flex-basis: 300px;

//     @media (min-width: ${bp.md}) {
//       flex-basis: 450px;
//     }
//   }

//   .list-item {
//     /* flex-grow: 1; */

//     :focus,
//     :hover {
//       background-color: ${colors.grey.m100};
//     }
//   }
// `
