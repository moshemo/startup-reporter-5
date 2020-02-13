import React from 'react'
import styled from 'styled-components'
import mainTheme from '../../../theme'

export const FooterCopyright = () => (
  <Base>
    <Text>Copyright © {new Date().getFullYear()} Young Startup</Text>
  </Base>
)

const {
  colors: { grey },
} = mainTheme

const Base = styled.section`
  background-color: #111;
  padding: 24px 12px;
`

const Text = styled.div`
  color: ${grey.darker};
  font-size: 16px;
  letter-spacing: 0.125em;
  text-align: center;
`
