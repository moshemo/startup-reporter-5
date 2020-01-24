import React from 'react'
import styled from 'styled-components'

import { Subtitle, Title } from 'Elements'

export const OurStory = props => (
  <Base {...props}>
    <Subtitle>Our Story</Subtitle>
    <Title>
      It All Started with <b>an Idea</b>
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
      finibus est. Cras elit justo, tempus non diam ac, semper consequat sem.
      Nullam nec molestie ligula. Mauris consequat dui in magna varius, sit amet
      scelerisque metus vestibulum. Proin nulla tortor, vestibulum vel
      condimentum vitae, aliquam nec ante. Phasellus ut lorem fermentum,
      lobortis velit ac, eleifend urna. Ut placerat velit fermentum, rhoncus
      libero nec, mattis urna. Proin nec porta odio. Curabitur metus mi, cursus
      eget purus sed, fermentum pellentesque tellus. Maecenas quis neque at odio
      vestibulum volutpat. Aliquam erat volutpat.
    </Text>
  </Base>
)

const Base = styled.section`
  .title,
  .subtitle {
    text-align: center;
  }
`

const Text = styled.p`
  color: #424242;

  column-count: 3;
  column-gap: 32px;
  column-width: 240px;

  font-size: 18px;
  font-weight: 300;
  line-height: 1.3em;
  margin-bottom: 50px;
`
