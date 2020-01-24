import React from 'react'

import SEO from 'Components/seo'
import { Container } from 'Elements'
import { Hero } from './_modules/_hero'
import { Plans } from './_modules/_plans'

import FullWidth from 'Layouts/main/full-width'

const AdvertisePage = () => (
  <FullWidth>
    <SEO title="Advertise" />
    <Container>
      <Hero />
      <Plans />
    </Container>
  </FullWidth>
)

export default AdvertisePage
