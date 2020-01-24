import React from 'react'
import styled from 'styled-components'

import { above, colors } from 'Vars'

import { Title } from './styles'

export const Contact = () => (
  <Base>
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
  </Base>
)

const Base = styled.div`
  color: #fff;
  grid-area: contact;

  ${above.lg`
    justify-self: end;
  `}
`

const Group = styled.div`
  margin-bottom: 18px;
`

const Address = styled.address`
  color: ${colors.grey.m500};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25;
`

const Anchor = styled.a`
  color: ${colors.grey.m500};

  :hover {
    color: ${colors.grey.m400};
  }
`
