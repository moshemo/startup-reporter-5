import React from 'react'
import PropTypes from 'prop-types'
// import SEO from 'Components/seo'

import { GlobalCss } from 'Shared/global'

// ------- LAYOUT -------
const BaseLayout = ({ children }) => (
  <>
    {children}
    <GlobalCss />
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
