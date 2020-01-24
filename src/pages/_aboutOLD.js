import React from 'react'
import styled from 'styled-components'

import SEO from 'Components/seo'

import { MediaHero as Hero, VideoPlayer } from 'Components'
// import { Container as ContainerElement } from 'Elements'
import FullWidth from 'Layouts/main/full-width'
import { breakpoints as bp, colors } from 'Vars'

import { List } from './_modules/list'
import { ListWrapper, NewsBase } from './_styles'

const AboutPage = () => (
  <FullWidth>
    <SEO title="About" />
    <Container>
      <Hero
        blurb="A few more lines with detail on how what your company does brings these benefits to your target market."
        subtitle="What We Do"
        title="We sift through the most important business news in bio-tech for business leaders who want to stay in the know."
        media={<Video />}
      />
    </Container>
  </FullWidth>
)

export default AboutPage

// ------- COMPONENTS -------
const Video = () => (
  <VideoPlayer
    controls
    light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
    url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
  />
)

// ------- STYLES -------
const Container = styled.div`
  max-width: 68%;
  margin: 0 auto;
`
