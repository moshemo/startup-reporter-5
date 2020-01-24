import React from 'react'
import styled from 'styled-components'

import { Container, Title as TitleComp, Blurb } from 'Elements'
import { ContactForm as ContactFormComp } from 'Forms'
import { breakpoints as bp, colors } from 'Vars'

export const Form = () => (
  <Base>
    <Container>
      <Title>Or Just Send Us a Message</Title>
      <Blurb>A subheadline goes here - speak to your customer</Blurb>
      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </Container>
  </Base>
)

// ------- STYLES -------
const Base = styled.section`
  /* padding-top: 96px; */
  padding: 96px 24px 0;
  text-align: center;
`

const Title = styled(TitleComp)`
  font-weight: 400;
  margin-bottom: 4px;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 24px; */
`

const ContactForm = styled(ContactFormComp)`
  margin-top: 36px;
  max-width: 87%;
  width: 800px;

  .input,
  .textarea {
    background-color: ${colors.grey.m200};
    border: 1px solid ${colors.grey.m300};
    display: block;
    margin-bottom: 18px;
    padding: 6px 10px;
    width: 100%;

    :focus {
      background-color: ${colors.yellow.m100};
      outline: 0;
    }
  }

  .input {
    height: 48px;
  }

  .textarea {
    height: 128px;
  }

  .button {
    background-color: ${colors.primary.m500};
    border: none;
    border-radius: 2px;
    font-size: 18px;
    font-weight: 400;
    height: 56px;
    cursor: pointer;
    letter-spacing: 0.5px;
    line-height: 36px;
    margin: 18px 0 0;
    min-width: 88px;
    outline: 0;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: 100%;

    :focus,
    :hover {
      background-color: ${colors.primary.m600};
    }
  }
`
