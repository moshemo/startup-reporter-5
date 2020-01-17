import React from 'react'
import styled from 'styled-components'

import { colors } from 'Vars'

export const SocialIcon = ({ children, className, href, title }) => (
  <SocialLink href={`http://${href}`} className={className}>
    <ScreenReader className="screen-reader">{title}</ScreenReader>
    {children}
  </SocialLink>
)

const SocialLink = styled.a`
  display: inline-block;

  color: ${colors.grey.m100};
  border-radius: 50%;
  font-size: 20px;
  line-height: 1;
  margin: 16px;
  padding: 1em;
  transition: all 0.3s;

  :hover {
    color: ${colors.grey.m100};
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
