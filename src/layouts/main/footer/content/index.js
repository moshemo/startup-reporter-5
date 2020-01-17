import React from 'react'
import styled from 'styled-components'

import { Container as ContainerElement } from 'Elements'
import { breakpoints as bp } from 'Vars'

import { Links } from './links'
import { Social } from './social'
import { Contact } from './contact'

export const Content = () => (
  <Base>
    <Container>
      <Links />
      <Social />
      <Contact />
    </Container>
  </Base>
)

const Base = styled.section`
  background-color: #222;
  padding-top: 48px;
  padding-bottom: 48px;
`

const Container = styled(ContainerElement)`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'links'
    'contact'
    'social';
  text-align: center;

  @media (min-width: ${bp.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'links contact' 'social social';
    grid-gap: 36px;
    justify-items: center;
    text-align: left;
  }
`
