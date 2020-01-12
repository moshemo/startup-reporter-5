import React from 'react'

import ErrorLayout from 'Layouts/error'
import SEO from 'Components/seo'

const Error404Page = () => (
  <ErrorLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ErrorLayout>
)

export default Error404Page
