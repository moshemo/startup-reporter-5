import React from 'react'
import styled from 'styled-components'

import { Blurb, Title, Subtitle } from 'Elements'
import { SignupForm as SignupFormComp } from 'Forms'
import { above, colors } from 'Vars'

export const Signup = () => (
  <Base>
    <Subtitle>Stay Up to Date</Subtitle>
    <Title>
      Signup for Our <b>Free Newsletter</b>
    </Title>
    <Blurb>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
      vulputate tincidunt.
    </Blurb>
    <FormWrapper>
      <SignupForm buttonText="Signup Today!" />
    </FormWrapper>
  </Base>
)

// ------- STYLES -------
const Base = styled.section`
  background-color: ${colors.grey.m100};
  margin-top: -50px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 72px;
  padding-bottom: 128px;
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

const FormWrapper = styled.div`
  margin: 48px auto 0;
  max-width: 250px;

  ${above.xs`
    max-width: 520px;
 `}

  ${above.md`
    max-width: 820px;
 `}
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

  ${above.md`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'name email'
      'button button';
    grid-gap: 16px;
  `}

  .input {
    border: 1px solid ${colors.grey.m200};
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
