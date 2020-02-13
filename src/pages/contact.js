import React from 'react'
import styled from 'styled-components'
import MainLayout from 'Layouts/main'
import SEO from 'Shared/components/seo'
import {
  FaRegEnvelope as Email,
  FaPhone as Phone,
  FaRegFileAlt as Fax,
} from 'react-icons/fa'

import { Container } from 'Shared/components'

import {
  ContactForm,
  ContactFormBase,
  ContactFormWrapper,
  ContactHero,
  Details,
  Detail,
  DetailsIcon,
  DetailsTitle,
  DetailsInfo,
  Title,
  Text,
} from 'Themes/main'

// ------- PAGE COMPONENT -------
const DetailsPage = () => (
  <MainLayout>
    <SEO title="Contact" />
    <HeroSection />
    <DetailsSection />
    <FormSection />
  </MainLayout>
)

export default DetailsPage

// ------- SECTIONS -------
const HeroSection = () => (
  <ContactHero>
    <Container>
      <Title>
        Three Ways to <b>Get In Touch</b>
      </Title>
      <Text>A subheadline goes here - speak to your customer</Text>
    </Container>
  </ContactHero>
)

const DetailsSection = () => (
  <Details>
    <Container>
      <Detail>
        <DetailsIcon as={Email} />
        <DetailsTitle>Email Us</DetailsTitle>
        <DetailsInfo href="mailto:address@email.com">
          address@email.com
        </DetailsInfo>
      </Detail>

      <Detail>
        <DetailsIcon as={Phone} />
        <DetailsTitle>Call Us</DetailsTitle>
        <DetailsInfo href="tel:972 555-1111">+972 555-1111</DetailsInfo>
      </Detail>

      <Detail>
        <DetailsIcon as={Fax} />
        <DetailsTitle>Fax Us</DetailsTitle>
        <DetailsInfo href="fax:972 555-1112">+972 555-1112</DetailsInfo>
      </Detail>
    </Container>
  </Details>
)

const FormSection = () => (
  <ContactFormBase>
    <Container>
      <Title
        css={`
          font-weight: 400;
          margin-bottom: 4px;
        `}
      >
        Or Just Send Us a Message
      </Title>
      <Text>A subheadline goes here - speak to your customer</Text>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </Container>
  </ContactFormBase>
)
