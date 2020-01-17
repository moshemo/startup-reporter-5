import React from 'react'
import styled from 'styled-components'

import {
  FaFacebookF as Facebook,
  FaFlickr as Flickr,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaPinterest as Pinterest,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
} from 'react-icons/fa'

import { SocialIcon as SocialIconComp } from 'Components'
import { breakpoints as bp, colors } from 'Vars'

import { Title as TitleStyles } from './styles'

export const Social = () => (
  <Base>
    <Title>Follow Us on Social Media</Title>

    {/* Do Not Preface 'href' with 'http://' */}
    <Icons>
      <SocialIcon href="facebook.com" title="Facebook" className="facebook">
        <Facebook />
      </SocialIcon>
      <SocialIcon href="youtube.com" title="Youtube" className="youtube">
        <Youtube />
      </SocialIcon>
      <SocialIcon href="twitter.com" title="Twitter" className="twitter">
        <Twitter />
      </SocialIcon>
      <SocialIcon href="pinterest.com" title="Pinterest" className="pinterest">
        <Pinterest />
      </SocialIcon>
      <SocialIcon href="linked.com" title="LinkedIn" className="linkedin">
        <Linkedin />
      </SocialIcon>
      <SocialIcon href="github.com" title="Github" className="github">
        <Github />
      </SocialIcon>
      <SocialIcon href="flickr.com" title="Flickr" className="flickr">
        <Flickr />
      </SocialIcon>
      <SocialIcon href="instagram.com" title="Instagram" className="instagram">
        <Instagram />
      </SocialIcon>
    </Icons>
  </Base>
)

const Base = styled.div`
  color: #fff;
  grid-area: social;

  @media (min-width: ${bp.sm}) {
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }
`

const Title = styled(TitleStyles)`
  text-align: center;
`

const Icons = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 0 32px;
  justify-items: center;

  /* @media (min-width: ${bp.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  } */
`

const SocialIcon = styled(SocialIconComp)`
  &.facebook {
    background-color: ${colors.brands.facebook};
  }

  &.flickr {
    background-color: ${colors.brands.flickr};
  }

  &.github {
    background-color: ${colors.brands.github};
  }

  &.instagram {
    background-color: ${colors.brands.instagram};
  }

  &.linkedin {
    background-color: ${colors.brands.linkedin};
  }

  &.pinterest {
    background-color: ${colors.brands.pinterest};
  }

  &.twitter {
    background-color: ${colors.brands.twitter};
  }

  &.youtube {
    background-color: ${colors.brands.youtube};
  }
`
