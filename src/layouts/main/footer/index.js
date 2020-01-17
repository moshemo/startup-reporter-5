import React from 'react'
import styled from 'styled-components'

import { Content } from './content'
import { Copyright } from './copyright'
import { Signup } from './signup'

export const Footer = () => (
  <footer>
    <Signup />
    <Content />
    <Copyright />
  </footer>
)
