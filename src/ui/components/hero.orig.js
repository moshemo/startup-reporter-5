import React from 'react'
import styled from 'styled-components'

import { breakpoints as bp, colors } from 'Vars'

export const MediaHero = ({ blurb, className, subtitle, title, media }) => (
  <Base className={className}>
    <Content className="content">
      <Subtitle className="subtitle">{subtitle}</Subtitle>
      <Title className="title">{title}</Title>
      <Blurb className="blurb">{blurb}</Blurb>
    </Content>
    <Media className="media">{media}</Media>
  </Base>
)

// ------- STYLES -------
const Base = styled.section`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  grid-template-columns: 1fr;
  grid-gap: 32px;
  align-items: center;
  /* padding: 32px 48px; */
  /* margin-bottom: 30px; */

  @media (min-width: ${bp.lg}) {
    grid-template-columns: 5fr 4fr;
  }
`

const Content = styled.div`
  /* margin: 0 auto;

  @media (min-width: ${bp.md}) {
    margin: 50px 60px 50px 0;
  } */
`

const Media = styled.div``

const Subtitle = styled.p`
  color: ${colors.primary.m700};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.625;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`

const Title = styled.h2`
  color: ${colors.grey.m800};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.375;
  margin-bottom: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 32px;
  }
`

const Blurb = styled.p`
  color: ${colors.grey.m500};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
`
