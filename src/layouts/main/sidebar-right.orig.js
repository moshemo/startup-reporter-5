import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from '../base'

import { Header } from './modules/header'
import { Main } from './modules/main'
import { Sidebar } from './modules/sidebar'
import { Footer } from './modules/footer'

const SidebarRight = ({ children }) => {
  return (
    <BaseLayout>
      <Header />
      <Content>
        <Main>{children}</Main>
        <Sidebar />
      </Content>
      <Footer />
    </BaseLayout>
  )
}

SidebarRight.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarRight

// ------- STYLES -------
const Content = styled.div`
  display: flex;
`
