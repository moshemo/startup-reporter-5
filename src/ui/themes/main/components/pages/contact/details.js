import React from 'react'
import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

const {
  breakpoints: { md },
  colors: { grey, offWhite, primary },
} = mainTheme

// ------- STYLES -------
export const Details = styled.section`
  .container {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1px;

    background-color: ${grey.lighter};
    padding: 0;

    @media (min-width: ${md}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export const Detail = styled.div`
  background-color: ${offWhite};
  padding: 48px;
  text-align: center;
`

export const DetailsIcon = styled.div`
  height: 48px;
  width: 48px;
  color: #039be5;
  color: ${primary.lighter};
`

export const DetailsTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 18px 0 4px;
`

export const DetailsInfo = styled.a`
  color: #757575;
  color: ${grey.darker};
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  margin: 0 auto;
  max-width: 330px;
`
