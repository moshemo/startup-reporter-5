import React from 'react'

import { Logo } from './logo'
import { Menu } from './menu'
import { Mobile } from './mobile'
import { Navbar } from './navbar'

export const Header = ({ children }) => (
  <header>
    <Navbar>
      <Logo />
      <Menu />
      <Mobile />
    </Navbar>
  </header>
)
