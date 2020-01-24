import React from 'react'

import { Blurb, Subtitle, Title } from 'Elements'
import { MediaHero, VideoPlayer } from 'Components'

export const Hero = props => (
  <MediaHero media={<Video />} {...props}>
    <Subtitle>What We Do</Subtitle>
    <Title>
      "We sift through the most important business news in bio-tech for business
      leaders who want to stay in the know."
    </Title>
    <Blurb>
      A few more lines with detail on how what your company does brings these
      benefits to your target market."
    </Blurb>
  </MediaHero>
)

const Video = () => (
  <VideoPlayer
    controls
    light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
    url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
  />
)
