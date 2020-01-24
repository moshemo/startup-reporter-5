import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from '../base'

const ErrorLayoutOLD = ({ children }) => <BaseLayout>{children}</BaseLayout>

ErrorLayoutOLD.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorLayoutOLD
