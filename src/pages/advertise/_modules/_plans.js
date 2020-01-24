import React from 'react'
import styled from 'styled-components'

import {
  FaBullhorn as BannerAds,
  FaNewspaper as Classifieds,
  FaRegCalendarAlt as Events,
  FaMicrophoneAlt as PressRelease,
} from 'react-icons/fa'

import { Blurb, Button, Icon as IconComp, Link, Title } from 'Elements'

import { above, colors } from 'Vars'

export const Plans = () => (
  <PlanWrapper>
    <Plan
      icon={PressRelease}
      title="Press Releases"
      blurb="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="press-releases"
    />

    <Plan
      icon={BannerAds}
      title="Banner Ads"
      blurb="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="banner-ads"
    />

    <Plan
      icon={Events}
      title="Events"
      blurb="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="events"
    />

    <Plan
      icon={Classifieds}
      title="Classifieds"
      blurb="Sit nulla est ex deserunt. Anim occaecat proident nostrud ullamco deserunt. Id consequat veniam incididunt duis."
      goTo="classifieds"
    />
  </PlanWrapper>
)

// ------- COMPONENTS -------
const Plan = ({ icon, title, blurb, goTo }) => (
  <PlanBase>
    <Icon as={icon} />
    <Title>{title}</Title>
    <Blurb>{blurb}</Blurb>
    <Button>
      <Link to={`/advertise/${goTo}`}>Learn More</Link>
    </Button>
  </PlanBase>
)

// ------- STYLES -------
const PlanWrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1px;

  background-color: ${colors.grey.m200};
  margin-top: 72px;
  padding: 0;

  ${above.md`
  grid-template-columns: 50% 50%;
  `}
`

const Icon = styled(IconComp)`
  font-weight: 300;
  padding-bottom: 12px;

  height: 48px;
  width: 48px;
  padding-bottom: 0 !important;
  fill: ${colors.primary.m600};
`

const PlanBase = styled.div`
  background-color: ${colors.grey.m50};
  padding: 48px;
  text-align: center;

  svg {
    height: 64px;
    width: 64px;
    color: ${colors.primary.m600};
  }

  ${Title} {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 28px 0 4px;
  }

  ${Blurb} {
    color: ${colors.grey.m600};
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    margin: 0 auto;
    max-width: 330px;
  }

  ${Button} {
    background-color: transparent;
    border: 2px solid ${colors.primary.m600};
    border-radius: 30px;
    color: ${colors.primary.m700};
    font-size: 15px;
    height: 50px;
    letter-spacing: 2px;
    line-height: 1;
    margin-top: 24px;
    padding: 0 28px;
    text-transform: uppercase;

    :hover {
      background-color: ${colors.primary.m600};
      color: ${colors.grey.m100};

      a {
        color: ${colors.grey.m100};
        font-weight: bold;
      }
    }
  }
`
