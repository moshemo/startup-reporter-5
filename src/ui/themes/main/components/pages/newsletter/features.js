import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Container as ContainerComp } from 'Shared/components'
import { Title, Text } from '../typography'
import mainTheme from '../../../theme'

// -------- COMPONENTS --------
export const InfoBox = ({
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

const {
  breakpoints: { md },
  colors: { light, primary },
} = mainTheme

// ------- STYLES -------
const Base = styled.section`
  color: ${light};

  margin: 0 auto;
  padding: 48px;

  @media (min-width: ${md}) {
    padding: 55px 20px 50px 20px;
    padding: 48px 24px;
  }

  svg {
    height: 50px;
    width: 50px;
    padding-bottom: 0 !important;
    fill: ${primary.base};
  }

  path {
    ${props => props.id && `fill: url(#${props.id})`};
  }
`

const Container = styled(ContainerComp)`
  @media (min-width: ${md}) {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
  }
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
