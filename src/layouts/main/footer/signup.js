import React from 'react'
import styled from 'styled-components'

import { Container } from 'Elements'
import { SignupForm as SignupFormComp } from 'Forms'
import { breakpoints as bp, colors } from 'Vars'

export const Signup = () => (
  <Base>
    <Container>
      <ContentWrapper>
        <Title>
          Signup for <span>Our Free Newsletter</span> and Stay Up to Date
        </Title>
        <Blurb>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
          vulputate tincidunt.
        </Blurb>
      </ContentWrapper>
      <FormWrapper>
        <SignupForm buttonText="Signup Today!" />
      </FormWrapper>
    </Container>
  </Base>
)

const Base = styled.section`
  background-color: #333;
  padding-top: 96px;
  padding-bottom: 96px;
  text-align: center;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 260px;

  @media (min-width: ${bp.xs}) {
    max-width: 520px;
  }

  @media (min-width: ${bp.md}) {
    max-width: 820px;
  }
`

const Title = styled.h4`
  color: ${colors.grey.m100};
  font-size: 30px;
  font-weight: 300;
  line-height: 1.375;
  margin-bottom: 15px;

  @media (min-width: ${bp.sm}) {
    font-size: 36px;
  }

  span {
    color: ${colors.accent.a400};
    font-weight: 700;
  }
`

const Blurb = styled.div`
  color: ${colors.grey.m200};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
  margin-bottom: 32px;
`

const FormWrapper = styled.div`
  margin: 0 auto;
  max-width: 250px;

  @media (min-width: ${bp.xs}) {
    max-width: 520px;
  }

  @media (min-width: ${bp.md}) {
    max-width: 820px;
  }
`

const SignupForm = styled(SignupFormComp)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6px 1fr;
  grid-template-areas:
    'name'
    'email'
    '.'
    'button';

  @media (min-width: ${bp.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'name email'
      'button button';
    grid-gap: 16px;
  }

  .input {
    border: 1px solid #757575;
    border-radius: 2px;
    height: 48px;
    padding: 6px 12px;

    :focus {
      background-color: ${colors.yellow.m50};
    }
  }

  .input.name {
    grid-area: name;
  }

  .input.email {
    grid-area: email;
  }

  .button {
    background-color: ${colors.accent.a400};
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    grid-area: button;
    letter-spacing: 0.1em;
    outline: 0;
    padding: 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    :focus,
    :hover {
      background-color: ${colors.accent.a700};
    }
  }
`
