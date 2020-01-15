import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from '../base'

import { Main } from './main'
import { Header } from './header'
import { Sidebar } from './sidebar'

const MainLayout = ({ children }) => (
  <BaseLayout>
    <Header />
    <Content>
      <Main>{children}</Main>
      <Sidebar />
    </Content>
  </BaseLayout>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout

// ------- STYLES -------
const Content = styled.div`
  display: flex;
`
