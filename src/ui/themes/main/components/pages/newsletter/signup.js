import styled from 'styled-components'
import mainTheme from '../../../theme'

import { SignupForm } from 'Forms'

const {
  breakpoints: { md, xs },
  colors: { accent, grey, light, yellow },
} = mainTheme

export const NewsletterSignup = styled.section`
  background-color: ${light};
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

    @media (min-width: ${md}) {
      font-size: 48px;
    }
  }

  .text {
    color: ${grey.darker};
    max-width: 70%;
    margin: 0 auto;
  }
`

export const FormWrapper = styled.div`
  margin: 48px auto 0;
  max-width: 250px;

  @media (min-width: ${xs}) {
    max-width: 520px;
  }

  @media (min-width: ${md}) {
    max-width: 820px;
  }
`

export const NewsletterForm = styled(SignupForm)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6px 1fr;
  grid-template-areas:
    'name'
    'email'
    '.'
    'button';

  @media (min-width: ${md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'name email'
      'button button';
    grid-gap: 16px;
  }

  .input {
    border: 1px solid ${grey.lighter};
    border-radius: 2px;
    height: 48px;
    padding: 6px 12px;

    :focus {
      background-color: ${yellow.m50};
    }
  }

  .input.name {
    grid-area: name;
  }

  .input.email {
    grid-area: email;
  }

  .button {
    background-color: ${accent.base};
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
      background-color: ${accent.dark};
    }
  }
`
