import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from '../base'

import { Header } from './modules/header'
import { Main } from './modules/main'
import { Footer } from './modules/footer'

const FullWidth = ({ children, sidebar = true }) => {
  return (
    <BaseLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </BaseLayout>
  )
}

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullWidth
