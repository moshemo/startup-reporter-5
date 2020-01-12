import React from 'react'

import MainLayout from 'Layouts/main'
import SEO from 'Components/seo'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </MainLayout>
)

export default IndexPage
