import React from 'react'
import styled from 'styled-components'
import MainLayout from 'Layouts/main'
import SEO from 'Shared/components/seo'
import { FaRegLightbulb as Lightbulb, FaSun as Sun } from 'react-icons/fa'

import {
  AboutHeroContent as Content,
  AboutHero as Hero,
  AboutHeroVideo as Video,
  Divider,
  OurStory,
  OurStoryText,
  OurValues,
  OurValuesBoxes as Boxes,
  OurValuesIconBox as Box,
  OurValuesIcon as Icon,
  OurValuesIconTitle as IconTitle,
  OurValuesIconWrapper as IconWrapper,
  OurValuesText,
  Title,
  Subtitle,
  Text,
  VideoPlayer,
} from 'Themes/main'

import { aboutInfobox } from 'Data'

// ------- PAGE COMPONENT -------
const AboutPage = () => (
  <MainLayout>
    <SEO title="About" />
    <Container>
      <HeroSection />
      <OurStorySection />
      <OurValuesSection />
    </Container>
  </MainLayout>
)

export default AboutPage

// ------- STYLES -------
const Container = styled.div`
  max-width: 68%;
  margin: 0 auto;
`

// ------- SECTIONS -------
const HeroSection = () => (
  <Hero>
    <Content>
      <Subtitle>What We Do</Subtitle>
      <Title>
        "We sift through the most important business news in bio-tech for
        business leaders who want to stay in the know."
      </Title>
      <Text>
        A few more lines with detail on how what your company does brings these
        benefits to your target market."
      </Text>
    </Content>
    <Video>
      <VideoPlayer
        controls
        light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
        url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
      />
    </Video>
  </Hero>
)

const OurStorySection = () => (
  <OurStory>
    <Subtitle>Our Story</Subtitle>
    <Title>
      It All Started with <b>an Idea</b>
    </Title>
    <OurStoryText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
      finibus est. Cras elit justo, tempus non diam ac, semper consequat sem.
      Nullam nec molestie ligula. Mauris consequat dui in magna varius, sit amet
      scelerisque metus vestibulum. Proin nulla tortor, vestibulum vel
      condimentum vitae, aliquam nec ante. Phasellus ut lorem fermentum,
      lobortis velit ac, eleifend urna. Ut placerat velit fermentum, rhoncus
      libero nec, mattis urna. Proin nec porta odio. Curabitur metus mi, cursus
      eget purus sed, fermentum pellentesque tellus. Maecenas quis neque at odio
      vestibulum volutpat. Aliquam erat volutpat.
    </OurStoryText>
  </OurStory>
)

const OurValuesSection = () => (
  <OurValues>
    <Subtitle>Our Values</Subtitle>
    <Title>The Ideas and Principles Behind Everything We Do</Title>
    <Boxes>
      {aboutInfobox.map(box => {
        return (
          <Box>
            <IconWrapper>
              <Icon as={box.icon} />
              {/* <Lightbulb /> */}
            </IconWrapper>
            <IconTitle>{box.title}</IconTitle>
            <OurValuesText>{box.text}</OurValuesText>
          </Box>
        )
      })}
    </Boxes>
  </OurValues>
)
