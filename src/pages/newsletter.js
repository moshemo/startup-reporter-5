import React from 'react'
import styled from 'styled-components'
import MainLayout from 'Layouts/main'

import { Container } from 'Shared/components'
import {
  Divider,
  Faq,
  FAQs,
  FaqTitle,
  FaqText,
  FormWrapper,
  InfoBox,
  Section,
  NewsletterForm,
  NewsletterSignup,
  Subtitle,
  Title,
  Text,
} from 'Themes/main'

import { faqs, newsletterInfobox } from 'Data'

// import SEO from 'Components/seo'

const NewsletterPage = () => (
  <MainLayout>
    <NewsletterSignup>
      <Subtitle>Stay Up to Date</Subtitle>
      <Title>
        Signup for Our <b>Free Newsletter</b>
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
        vulputate tincidunt.
      </Text>
      <FormWrapper>
        <NewsletterForm buttonText="Signup Today!" />
      </FormWrapper>
    </NewsletterSignup>
    {newsletterInfobox.map(box => (
      <InfoBox
        image={box.image}
        alt={box.alt}
        titleStart={box.titleStart}
        titleEnd={box.titleEnd}
        text={box.text}
      />
    ))}
    <Section>
      <Container>
        <Subtitle>Do You Have Any Questions?</Subtitle>
        <Title>
          <b>Frequently</b> Asked Questions
        </Title>
        <Divider />
        <FAQs>
          {faqs.map(faq => (
            <Faq>
              <FaqTitle>{faq.question}</FaqTitle>
              <FaqText>{faq.answer}</FaqText>
            </Faq>
          ))}
        </FAQs>
      </Container>
    </Section>
  </MainLayout>
)

export default NewsletterPage
