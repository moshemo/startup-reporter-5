import React from 'react'
import styled from 'styled-components'
import mainTheme from '../../../theme'

const {
  colors: { grey },
} = mainTheme

export const FAQs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  grid-gap: 48px;

  /* margin-top: 64px; */
  text-align: left;
`

export const Faq = styled.div`
  border-bottom: 1px solid ${grey.light};
  padding: 0 10px 48px;

  :nth-last-child(-n + 2) {
    border-bottom: none;
  }
`

export const FaqTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
`

export const FaqText = styled.div`
  color: ${grey.darker};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
`
