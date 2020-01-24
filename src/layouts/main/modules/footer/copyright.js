import React from 'react'
import styled from 'styled-components'

import { colors } from 'Vars'

export const Copyright = () => (
  <Base>
    <Text>Copyright © {new Date().getFullYear()} Young Startup</Text>
  </Base>
)

const Base = styled.section`
  background-color: #111;
  padding: 24px 12px;
`

const Text = styled.div`
  color: ${colors.grey.m600};
  font-size: 16px;
  letter-spacing: 0.125em;
  text-align: center;
`
