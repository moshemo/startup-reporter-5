import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Subtitle, Title } from 'Elements'
import { above, colors } from 'Vars'

export const OurTeam = props => (
  <Base {...props}>
    <Subtitle>Our Team</Subtitle>
    <Title>Meet the People Who Make It All Happen</Title>
    <Profiles>
      <Profile image="reagan.jpg" title="Ronald Reagan" desc="President" />
      <Profile
        image="bush-senior.jpg"
        title="George H. W. Bush"
        desc="President"
      />
      <Profile image="clinton.jpg" title="Bill Clinton" desc="President" />

      <Profile
        image="bush-junior.jpg"
        title="George W. Bush"
        desc="President"
      />
      <Profile image="obama.jpg" title="Barack Obama" desc="President" />
      <Profile image="trump.jpg" title="Donald Trump" desc="President" />
    </Profiles>
  </Base>
)

// ------- COMPONENTS -------
const Profile = ({ image, title, desc }) => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 370, maxHeight: 470) {
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
    <OverlayBase>
      <OverlayImage alt={title} fluid={imageName.node.fluid} />
      <Overlay>
        <OverlayText>
          <ProfileTitle>{title}</ProfileTitle>
          <Description>{desc}</Description>
        </OverlayText>
      </Overlay>
    </OverlayBase>
  )
}

// ------- STYLES -------
const Base = styled.section`
  .title,
  .subtitle {
    text-align: center;
  }
`

const Profiles = styled.div`
  display: grid;
  grid-template-columns: 180px;
  grid-gap: 12px;
  justify-content: center;

  ${above.xs`
    grid-template-columns: repeat(2, 196px);
  `}

  ${above.sm`
    grid-template-columns: repeat(3, 196px);
  `}

  ${above.xl`
    grid-template-columns: repeat(4, 170px);
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  `}
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${colors.grey.m900};
  cursor: pointer;
`

const OverlayBase = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 370px;

  :hover ${Overlay} {
    opacity: 0.8;
  }
`

const OverlayImage = styled(Img)`
  display: block;
  max-width: 370px;
  width: 100%;
  height: auto;
`

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const ProfileTitle = styled.h4`
  color: ${colors.grey.m100};
  font-weight: 700;
  margin-bottom: 3px;
  text-transform: capitalize;
`

const Description = styled.div`
  color: ${colors.grey.m100};
  font-weight: 500;
  text-transform: uppercase;
`
