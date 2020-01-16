import React from 'react'
import styled from 'styled-components'

import { NewsletterSignupForm } from 'Forms'
import { colors } from 'Vars'

export const NewsletterSignup = () => (
  <Base>
    <Title>The Latest News</Title>
    <Subtitle>Signup for Our Newsletter & Stay Up to Date</Subtitle>
    <Form buttonText="Signup Today" />
  </Base>
)

const Base = styled.div`
  background: ${colors.secondary.m500};
  color: ${colors.grey.m100};
  line-height: 1.3;
  margin: 32px auto;
  padding: 16px 16px 24px;
  text-align: center;
  width: 280px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 16px;
`

const Subtitle = styled.div`
  color: ${colors.grey.m100};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 24px;
  padding: 8px 16px;
`

const Form = styled(NewsletterSignupForm)`
  .input {
    background-color: ${colors.grey.m100};
    color: ${colors.grey.m800};
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid ${colors.grey.m300};
    box-sizing: border-box;
    height: 36px;
    margin-bottom: 12px;
    padding: 6px 12px;
    transition: all 0.3s ease-in-out;
    width: 100%;

    :focus,
    :hover {
      background-color: ${colors.yellow.m50};
      outline: 0;
    }
  }

  .button {
    background-color: ${colors.primary.m700};
    border: none;
    border-radius: 2px;
    color: ${colors.grey.m100};
    font-size: 14px;
    height: 36px;
    letter-spacing: 0.5px;
    line-height: 36px;
    margin-top: 12px;
    min-width: 88px;
    outline: 0;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    :focus {
      background-color: ${colors.primary.m800};
    }

    :hover {
      background-color: ${colors.primary.m600};
    }
  }
`
