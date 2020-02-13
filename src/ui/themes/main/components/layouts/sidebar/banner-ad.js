import React from 'react'
import styled from 'styled-components'
import mainTheme from '../../../theme'

import { Button as ButtonComp } from 'Shared/components'

export const BannerAd = props => (
  <Base>
    <Title>Advertise With Us</Title>
    <SubTitle>
      Reach Over Four Hundred Thousand Businesses & Professionals
    </SubTitle>
    <Button>Learn More</Button>
  </Base>
)

console.log('mainTheme: ', mainTheme)

// ------- CONST -------
const {
  colors: { dark, light, secondary, yellow },
} = mainTheme

// ------- STYLES -------
const Base = styled.form`
  background: ${dark};
  color: ${light};
  line-height: 1.3;
  margin: 32px auto;
  padding: 0 0 32px;
  text-align: center;
  width: 250px;
`

const Title = styled.div`
  background-color: ${yellow.m600};
  color: ${dark};
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
  padding: 16px 16px;
`

const SubTitle = styled.div`
  color: ${light};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 16px;
  padding: 8px 16px;
`

const Button = styled(ButtonComp)`
  background-color: ${secondary.darker};
  border-radius: 0;
  color: ${light};

  :hover {
    background-color: ${secondary.darkest};
    color: ${light};
    border: 0;
  }

  :focus {
    background-color: ${secondary.darkest};
  }
`
