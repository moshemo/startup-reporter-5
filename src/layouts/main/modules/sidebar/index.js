import React from 'react'
import styled from 'styled-components'

import { BannerAd } from './ads'
import { List } from './list'
import { Search } from './search'
import { Signup } from './signup'

import { breakpoints as bp, colors } from 'Vars'

export const Sidebar = () => (
  <SidebarBase>
    <Search />
    <Signup />
    <List />
    <BannerAd />
  </SidebarBase>
)

const SidebarBase = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: block;
    background-color: ${colors.grey.m100};
    min-height: 100vh;
    min-width: 400px;
    width: 400px;
  }
`
