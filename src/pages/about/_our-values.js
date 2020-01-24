import React from 'react'
import styled from 'styled-components'

import { FaRegLightbulb as Lightbulb, FaSun as Sun } from 'react-icons/fa'

import { Icon as IconComp, Subtitle, Title } from 'Elements'
import { above, colors } from 'Vars'

export const OurValues = props => (
  <Base {...props}>
    <Subtitle>Our Values</Subtitle>
    <Title>The Ideas and Principles Behind Everything We Do</Title>
    <Boxes>
      <IconBox
        id="svg-icon-gradient"
        icon={Lightbulb}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />
      <IconBox
        id="svg-icon-gradient"
        icon={Sun}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />
      <IconBox
        id="svg-icon-gradient"
        icon={Lightbulb}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />

      <IconBox
        id="svg-icon-gradient"
        icon={Sun}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />
      <IconBox
        id="svg-icon-gradient"
        icon={Lightbulb}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />
      <IconBox
        id="svg-icon-gradient"
        icon={Sun}
        title="Headline"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec mattis, nunc nec faucibus elementum."
      />
    </Boxes>
  </Base>
)

// ------- COMPONENTS --------
const IconBox = ({ icon, text, title, ...props }) => (
  <IconBoxBase {...props}>
    <IconWrapper>
      <Icon as={icon} />
    </IconWrapper>
    <IconTitle>{title}</IconTitle>
    <Text>{text}</Text>
  </IconBoxBase>
)

// ------- STYLES -------
const Base = styled.section`
  .title,
  .subtitle {
    text-align: center;
  }
`

const Boxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px 88px;
  margin-top: 64px;

  ${above.sm`
    grid-template-columns: 320px;
    justify-content: center;
  `}

  ${above.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${above.xl`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const IconBoxBase = styled.div`
  color: ${colors.grey.m400};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`
const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${colors.grey.m300};
  border-radius: 48em;

  height: 128px;
  width: 128px;

  margin-bottom: 24px;
`

const Icon = styled(IconComp)`
  font-weight: 300;
  padding-bottom: 12px;

  height: 48px;
  width: 48px;
  padding-bottom: 0 !important;
  fill: ${colors.primary.m600};
`

const IconTitle = styled.h4`
  color: ${colors.grey.m700};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.375;
  padding-bottom: 16px;
  text-transform: uppercase;
`

const Text = styled.div`
  color: ${colors.grey.m500};
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
`
