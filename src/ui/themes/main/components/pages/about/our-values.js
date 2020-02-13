import React from 'react'
import styled from 'styled-components'

import mainTheme from 'Themes/main/theme'

import { Subtitle, Title } from 'Shared/components'

const {
  breakpoints: { sm, md, xl },
  colors: { grey, primary },
} = mainTheme

// ------- STYLES -------
export const OurValues = styled.section`
  margin-top: 108px;

  .title,
  .subtitle {
    text-align: center;
  }
`

export const OurValuesBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px 88px;
  margin-top: 64px;

  @media (min-width: ${sm}) {
    grid-template-columns: 320px;
    justify-content: center;
  }

  @media (min-width: ${md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const OurValuesIconBox = styled.div`
  color: ${grey.base};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`
export const OurValuesIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${grey.light};
  border-radius: 48em;

  height: 128px;
  width: 128px;

  margin-bottom: 24px;
`

export const OurValuesIcon = styled.div`
  font-weight: 300;
  padding-bottom: 12px;

  height: 48px;
  width: 48px;
  padding-bottom: 0 !important;
  fill: ${primary.light};
`

export const OurValuesIconTitle = styled.h4`
  color: ${grey.darkest};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.375;
  padding-bottom: 16px;
  text-transform: uppercase;
`

export const OurValuesText = styled.div`
  color: ${grey.dark};
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
`
