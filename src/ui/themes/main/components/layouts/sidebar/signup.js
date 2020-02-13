import React from 'react'
import styled from 'styled-components'
import { SignupForm } from 'Forms'
import mainTheme from '../../../theme'

export const Signup = () => (
  <Base>
    <Title>The Latest News</Title>
    <Subtitle>Signup for Our Newsletter & Stay Up to Date</Subtitle>
    <Form buttonText="Signup Today" />
  </Base>
)

// ------- CONST -------
const {
  colors: { dark, grey, light, primary, secondary, yellow },
} = mainTheme

// ------- STYLES -------
const Base = styled.div`
  background: ${secondary.darker};
  color: ${light};
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
  color: ${light};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 24px;
  padding: 8px 16px;
`

const Form = styled(SignupForm)`
  .input {
    background-color: ${light};
    color: ${dark};
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid ${grey.light};
    box-sizing: border-box;
    height: 36px;
    margin-bottom: 12px;
    padding: 6px 12px;
    transition: all 0.3s ease-in-out;
    width: 100%;

    :focus,
    :hover {
      background-color: ${yellow.m50};
      outline: 0;
    }
  }

  .button {
    background-color: ${primary.base};
    border: none;
    border-radius: 2px;
    color: ${light};
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
      background-color: ${primary.dark};
    }

    :hover {
      background-color: ${primary.light};
    }
  }
`
