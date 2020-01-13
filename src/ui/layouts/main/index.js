import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from '../base'
import { Header } from './header'

const MainLayout = ({ children }) => (
  <BaseLayout>
    <Header>{children}</Header>
  </BaseLayout>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
