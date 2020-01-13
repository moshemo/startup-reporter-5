import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// import { GlobalCss } from './theme'
import { GlobalCss } from './global'
import theme from '../../theme/theme.js'

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
