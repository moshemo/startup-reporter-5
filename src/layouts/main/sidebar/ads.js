import React from 'react'
import styled from 'styled-components'

import { Button as ButtonElement } from 'Elements'
import { colors } from 'Vars'

export const BannerAd = props => (
  <Base>
    <Title>Advertise With Us</Title>
    <SubTitle>
      Reach Over Four Hundred Thousand Businesses & Professionals
    </SubTitle>
    <Button>Learn More</Button>
  </Base>
)

const Base = styled.form`
  background: ${colors.grey.m800};
  color: ${colors.grey.m100};
  line-height: 1.3;
  margin: 32px auto;
  padding: 0 0 32px;
  text-align: center;
  width: 250px;
`

const Title = styled.div`
  background-color: ${colors.yellow.m600};
  color: ${colors.grey.m800};
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
  padding: 16px 16px;
`

const SubTitle = styled.div`
  color: ${colors.grey.m100};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 16px;
  padding: 8px 16px;
`

const Button = styled(ButtonElement)`
  background-color: ${colors.secondary.m500};
  border-radius: 0;
  color: ${colors.grey.m100};

  :hover {
    background-color: ${colors.secondary.m600};
    color: ${colors.grey.m100};
    border: 0;
  }

  :focus {
    background-color: ${colors.secondary.m600};
  }
`
