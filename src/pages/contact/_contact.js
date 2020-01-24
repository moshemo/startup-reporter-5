import React from 'react'
import styled from 'styled-components'

import {
  FaRegEnvelope as Email,
  FaPhone as Phone,
  FaRegFileAlt as Fax,
} from 'react-icons/fa'

import { Container, Icon as IconElement } from 'Elements'

import { above, colors } from 'Vars'

export const ContactComp = () => (
  <Contacts>
    <Container>
      <Contact>
        <Icon as={Email} />
        <Title>Email Us</Title>
        <Info href="mailto:address@email.com">address@email.com</Info>
      </Contact>

      <Contact>
        <Icon as={Phone} />
        <Title>Call Us</Title>
        <Info href="tel:972 555-1111">+972 555-1111</Info>
      </Contact>

      <Contact>
        <Icon as={Fax} />
        <Title>Fax Us</Title>
        <Info href="fax:972 555-1112">+972 555-1112</Info>
      </Contact>
    </Container>
  </Contacts>
)

// ------- STYLES -------
const Contacts = styled.section`
  ${Container} {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1px;

    background-color: ${colors.grey.m200};
    padding: 0;

    ${above.md`
  grid-template-columns: 1fr 1fr 1fr;
  `}
  }
`

const Contact = styled.div`
  background-color: ${colors.grey.m50};
  padding: 48px;
  text-align: center;

  /* svg {
    height: 64px;
    width: 64px;
    color: ${colors.primary.m600};
  } */
`

const Icon = styled(IconElement)`
  /* font-weight: 300;
  padding-bottom: 12px;

  height: 48px;
  width: 48px;
  padding-bottom: 0 !important;
  fill: ${colors.primary.m600}; */

  /* color: ${colors.primary.m500};
  margin-bottom: 24px;
  font-size: 48px; */

  height: 48px;
    width: 48px;
    color: #039be5;
    color: ${colors.primary.m500};
`

const Title = styled.div`
  /* color: #9e9e9e;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.6; */

  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 18px 0 4px;
`

const Info = styled.a`
  color: #757575;
  color: ${colors.grey.m600};
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  margin: 0 auto;
  max-width: 330px;
`
