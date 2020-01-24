import React from 'react'
import styled from 'styled-components'
import {
  Blurb,
  Title,
  Subtitle,
  Container,
  ContactIcon as Icon,
} from 'Elements'
import { above, colors } from 'Vars'

import {
  FaRegEnvelope as Email,
  FaPhone as Phone,
  FaRegFileAlt as Fax,
} from 'react-icons/fa'

export const Hero = props => (
  <Base>
    <Container>
      <Title>
        Three Ways to <b>Get In Touch</b>
      </Title>
      <Blurb>A subheadline goes here - speak to your customer</Blurb>
    </Container>
  </Base>
)

// ------- STYLES -------
const Base = styled.section`
  margin-bottom: 48px;
  padding: 24px;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 24px;
  margin: 24px 32px 130px;
`

const Contact = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 8px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 25px;

  display: flex;
  align-items: center;
  flex-direction: column;
`
