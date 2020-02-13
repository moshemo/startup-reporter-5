import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  FaAngleRight,
  FaFacebookF as Facebook,
  FaFlickr as Flickr,
  FaGithub as Github,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaPinterest as Pinterest,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
} from 'react-icons/fa'

import { Container as ContainerComp } from 'Shared/components'
import mainTheme from '../../../theme'

import { brandColors } from 'Helpers/colors/brand'

import { menuLinks } from 'Data'

export const FooterContent = () => (
  <Base>
    <Container>
      <Links>
        <Title>Browse the Site</Title>
        <List>
          {menuLinks.map(item => (
            <ListItem to={`/${item.to}`} title={item.title} key={item.key} />
          ))}
        </List>
      </Links>
      <Social>
        <Title
          css={`
            text-align: center;
          `}
        >
          Follow Us on Social Media
        </Title>
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
          <SocialIcon
            href="pinterest.com"
            title="Pinterest"
            className="pinterest"
          >
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
          <SocialIcon
            href="instagram.com"
            title="Instagram"
            className="instagram"
          >
            <Instagram />
          </SocialIcon>
        </Icons>
      </Social>
      <Contact>
        <Title>Contact Us</Title>

        <Address>
          <Group>
            <div>Rechov Ploni 613</div>
            <div>Yerushalayim, Israel</div>
          </Group>

          <Group>
            <div>
              <Anchor href="tel:+972-800-888-1111">+972-800-888-1111</Anchor>
            </div>
            <div>
              <Anchor href="tel:+972-2-555-1111">+972-2-555-1111</Anchor>
            </div>
          </Group>

          <Group>
            <Anchor href="mailto:mail@address.com">mail@address.com</Anchor>
          </Group>
        </Address>
      </Contact>
    </Container>
  </Base>
)

const {
  breakpoints: { xs, sm, md, lg },
  colors: { accent, grey, light },
} = mainTheme

const Base = styled.section`
  background-color: #222;
  padding-top: 48px;
  padding-bottom: 48px;
`

const Container = styled(ContainerComp)`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: 100%;
  grid-template-areas:
    'links'
    'contact'
    'social';
  text-align: center;

  @media (min-width: ${md}) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 'links social contact';
    grid-gap: 36px;
    justify-items: center;
    text-align: left;
  }
`

const Title = styled.h4`
  font-weight: 100;
  line-height: 1.3;
  color: ${light};
  font-size: 20px;
  margin-bottom: 16px;
`

// --- LIST ---
const ListItemComp = ({ className, to, title }) => (
  <ListItemBase className={className}>
    <AngleRight className="icon" />
    <Link className="link" to={to}>
      {title}
    </Link>
  </ListItemBase>
)

const Links = styled.div`
  color: #fff;
  grid-area: links;

  @media (min-width: ${lg}) {
    justify-self: start;
  }
`

const List = styled.ul``

const ListItemBase = styled.li``

const ListItem = styled(ListItemComp)`
  .icon {
    color: ${grey.base};
    font-size: 18px;
    font-weight: 700;
    margin-right: 5px;
    :focus {
      outline: 0;
    }
  }

  .link {
    color: ${grey.base};
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;

    :focus {
      outline: 0;
      color: ${accent.base};
    }
  }

  :focus,
  :hover {
    .icon,
    .link {
      color: ${accent.base};
    }
  }
`

const AngleRight = styled(FaAngleRight)`
  display: none;

  @media (min-width: ${md}) {
    display: inline;
  }
`

// --- Social ---
const Social = styled.div`
  color: #fff;
  grid-area: social;

  @media (min-width: ${sm}) {
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }
`

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 88px);

  justify-content: center;
  justify-items: center;

  @media (min-width: ${xs}) {
    grid-gap: 0 8px;
    grid-template-columns: repeat(4, 88px);
  }
`

const SocialIconComp = ({ children, className, href, title }) => (
  <SocialLink href={`http://${href}`} className={className}>
    <ScreenReader className="screen-reader">{title}</ScreenReader>
    {children}
  </SocialLink>
)

const SocialIcon = styled(SocialIconComp)`
  &.facebook {
    background-color: ${brandColors.facebook};
  }

  &.flickr {
    background-color: ${brandColors.flickr};
  }

  &.github {
    background-color: ${brandColors.github};
  }

  &.instagram {
    background-color: ${brandColors.instagram};
  }

  &.linkedin {
    background-color: ${brandColors.linkedin};
  }

  &.pinterest {
    background-color: ${brandColors.pinterest};
  }

  &.twitter {
    background-color: ${brandColors.twitter};
  }

  &.youtube {
    background-color: ${brandColors.youtube};
  }
`

const SocialLink = styled.a`
  display: inline-block;

  color: ${light};
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  margin: 16px;
  padding: 1em;
  transition: all 0.3s;

  :focus {
    outline: 0;
    transform: scale(1.2);
  }

  :hover {
    color: ${light};
    opacity: 0.9;
    transform: scale(1.1);
  }
`

const ScreenReader = styled.span`
  position: absolute;
  top: -10000em;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

// --- Contact ---
const Contact = styled.div`
  color: #fff;
  grid-area: contact;

  @media (min-width: ${lg}) {
    justify-self: end;
  }
`

const Group = styled.div`
  margin-bottom: 18px;

  > div {
    color: ${grey.dark};
  }
`

const Address = styled.address`
  color: ${grey.m500};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25;
`

const Anchor = styled.a`
  color: ${grey.dark};

  :hover {
    color: ${grey.base};
  }
`
