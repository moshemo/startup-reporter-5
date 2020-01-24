import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from '../base'

import { Header } from './modules/header'
import { Main as MainX } from './modules/main'
import { Sidebar } from './modules/sidebar'
import { Footer } from './footer'

const MainLayout = ({ children, sidebar = true }) => {
  return (
    <BaseLayout>
      <Header />
      <Content>
        <main>{children}</main>
        <Sidebar />
      </Content>
      <Footer />
    </BaseLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout

// ------- STYLES -------
const Content = styled.div`
  display: flex;
`
