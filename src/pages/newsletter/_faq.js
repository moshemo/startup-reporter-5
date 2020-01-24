import React from 'react'
import styled, { css } from 'styled-components'

import { Container, Blurb, Title, Subtitle } from 'Elements'
import { SignupForm as SignupFormComp } from 'Forms'
import { above, colors } from 'Vars'

export const FaqComp = () => (
  <Base>
    <Container>
      <Subtitle>Do You Have Any Questions?</Subtitle>
      <Title>
        <b>Frequently</b> Asked Questions
      </Title>
      <Divider />
      <FAQs>
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
        <FAQ
          question="Nulla est ex deserunt. Anim occaecat."
          answer="Nulla est ex deserunt exercitation anim occaecat proident nostrud ullamco deserunt aute id consequat. Incididunt duis in sint irure nisi magna mollit officia cillum Lorem ullamco minim nostrud elit. Tempor esse quis non cillum sunt ad dolore quis aute consequat ipsum magna."
        />
      </FAQs>
    </Container>
  </Base>
)

// ------- COMPONENTS -------
const FAQ = ({ question, answer }) => (
  <FaqBase>
    <FaqTitle>{question}</FaqTitle>
    <Text>{answer}</Text>
  </FaqBase>
)

// ------- STYLES -------
const Base = styled.section`
  margin-top: 110px;
  padding: 24px;
  text-align: center;
`

const Divider = styled.div`
  border-top: 3px solid ${colors.accent.a400};
  height: 2px;
  width: 100px;
  margin: 24px auto 40px;
`

const FAQs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  grid-gap: 48px;

  /* margin-top: 64px; */
  text-align: left;
`

const FaqBase = styled.div`
  border-bottom: 1px solid ${colors.grey.m300};
  padding: 0 10px 48px;

  :nth-last-child(-n + 2) {
    border-bottom: none;
  }
`

const FaqTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
`
const Text = styled.div`
  color: ${colors.grey.m600};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
`
