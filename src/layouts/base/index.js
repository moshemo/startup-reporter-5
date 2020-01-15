import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalCss } from 'Theme/global'

import theme from 'Theme/theme'

import SEO from 'Components/seo'

const BaseLayout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <SEO title="Styled Components & Styled System Gatsby Starter" />
      {children}
    </ThemeProvider>
    <GlobalCss />
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
