import React from 'react'
import styled from 'styled-components'

import SEO from 'Components/seo'
import { Hero } from './_hero'
import { OurStory } from './_our-story'
import { OurTeam } from './_our-team'
import { OurValues } from './_our-values'

import { section } from '../_styles'

import FullWidth from 'Layouts/main/full-width'

const AboutPage = () => (
  <FullWidth>
    <SEO title="About" />
    <Container>
      <Hero css={section} />
      <OurStory css={section} />
      <OurTeam css={section} />
      <OurValues css={section} />
    </Container>
  </FullWidth>
)

export default AboutPage

// ------- STYLES -------
const Container = styled.div`
  max-width: 68%;
  margin: 0 auto;
`
