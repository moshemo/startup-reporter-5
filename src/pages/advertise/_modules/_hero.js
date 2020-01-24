import React from 'react'
import styled from 'styled-components'

import { Container, Blurb, Subtitle, Title } from 'Elements'
import { above, colors } from 'Vars'

export const Hero = () => (
  <Base>
    <Container>
      <Subtitle>Find New Customers</Subtitle>
      <Title as="h1">
        <b>Advertise</b> with Us
      </Title>
      <Blurb>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
        esse quis.
      </Blurb>
    </Container>
  </Base>
)

const Base = styled.section`
  text-align: center;

  .subtitle {
    margin-bottom: 0;
  }

  .title {
    font-size: 32px;
    font-weight: 300;

    ${above.md`
    font-size: 48px;
  `}
  }

  .blurb {
    color: ${colors.grey.m600};
    max-width: 70%;
    margin: 0 auto;
  }
`
