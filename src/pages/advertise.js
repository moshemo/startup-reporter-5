import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MainLayout from 'Layouts/main'
import SEO from 'Shared/components/seo'

import { Button, Container } from 'Shared/components'

import {
  AdHero,
  AdPlan,
  AdPlans,
  AdPlanIcon,
  Title,
  Subtitle,
  Text,
} from 'Themes/main'

import { adPlans } from 'Data'

// ------- PAGE COMPONENT -------
const AdvertisePage = () => (
  <MainLayout>
    <SEO title="Advertise" />
    <Container>
      <Hero />
      <Plans />
    </Container>
  </MainLayout>
)

export default AdvertisePage

// ------- SECTIONS -------

const Hero = () => (
  <AdHero>
    <Container>
      <Subtitle>Find New Customers</Subtitle>
      <Title as="h1">
        <b>Advertise</b> with Us
      </Title>
      <Text>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
        esse quis.
      </Text>
    </Container>
  </AdHero>
)

const Plans = () => (
  <AdPlans>
    {adPlans.map(plan => (
      <AdPlan>
        <AdPlanIcon as={plan.icon} />
        <Title>{plan.title}</Title>
        <Text>{plan.text}</Text>
        <Button>
          <Link to={`/advertise/${plan.goTo}`}>Learn More</Link>
        </Button>
      </AdPlan>
    ))}
  </AdPlans>
)
