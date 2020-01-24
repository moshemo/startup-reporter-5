import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Container as ContainerComp, Title, Text } from 'Elements'
import { above, colors } from 'Vars'

export const Features = () => (
  <>
    <InfoBox
      image="ad-image-3.png"
      alt="Ad Image 3"
      titleStart="Write a Compelling Headline"
      titleEnd="that Will Speak to Your Customers"
      text="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    />
    <InfoBox
      image="ad-image-2.png"
      alt="Ad Image 2"
      titleStart="Write a Compelling Headline"
      titleEnd="that Will Speak to Your Customers"
      text="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    />
    <InfoBox
      image="ad-image-1.png"
      alt="Ad Image 1"
      titleStart="Write a Compelling Headline"
      titleEnd="that Will Speak to Your Customers"
      text="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis."
    />
  </>
)

// -------- COMPONENTS --------
const InfoBox = ({
  alt,
  image,
  imageRight,
  text,
  titleStart,
  titleEnd,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query AdImageQuery2 {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imageName = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === image
  )

  return (
    <Base {...props}>
      <Container {...props}>
        {!imageRight && (
          <ImageSection>
            <Image alt={alt} fluid={imageName.node.fluid} />
          </ImageSection>
        )}
        <Content>
          <Title style={{ fontWeight: 400 }}>
            <b>{titleStart} </b>
            {titleEnd}
          </Title>
          <Text>{text}</Text>
        </Content>
        {imageRight && (
          <ImageSection>
            <Image alt={alt} fluid={imageName.node.fluid} />
          </ImageSection>
        )}
      </Container>
    </Base>
  )
}

// ------- STYLES -------
const Base = styled.section`
  color: ${colors.grey.m100};

  margin: 0 auto;
  padding: 48px;

  ${above.md`
    padding: 55px 20px 50px 20px;
    padding: 48px 24px;
  `}
    /* span {
      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid ${colors.greyLight};
      border-radius: 50em;

      height: 125px;
      width: 125px;

      margin-bottom: 25px;
    } */

  svg {
    height: 50px;
    width: 50px;
    padding-bottom: 0 !important;
    fill: ${colors.primary};
  }

  path {
    ${props => props.id && `fill: url(#${props.id})`};
  }
`

const Container = styled(ContainerComp)`
  ${above.md`
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
  `}
`

const ImageSection = styled.div`
  display: grid;
  justify-items: center;
`

const Image = styled(Img)`
  display: block;
  height: auto;
  max-height: 256px;
  width: 100%;
  max-width: 256px;
`

const Content = styled.div``
