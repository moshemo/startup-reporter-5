import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from '../base'

import { Header } from './modules/header'

const SidebarLeft = ({ children }) => {
  return (
    <BaseLayout>
      <h2>Admin Sidebar Left</h2>
    </BaseLayout>
  )
}

SidebarLeft.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SidebarLeft
