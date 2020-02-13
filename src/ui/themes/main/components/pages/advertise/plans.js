import React from 'react'
import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

const {
  breakpoints: { md },
  colors: { grey, light, offWhite, primary },
} = mainTheme

// ------- STYLES -------
export const AdPlans = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1px;

  background-color: ${grey.lighter};
  margin-top: 72px;
  padding: 0;

  @media (min-width: ${md}) {
    grid-template-columns: 50% 50%;
  }
`

export const AdPlanIcon = styled.div`
  font-weight: 300;
  padding-bottom: 12px;

  height: 48px;
  width: 48px;
  padding-bottom: 0 !important;
  fill: ${primary.light};
`

export const AdPlan = styled.div`
  /* background-color: ${offWhite}; */
  background-color: #fff;
  padding: 48px;
  text-align: center;

  svg {
    height: 64px;
    width: 64px;
    color: ${primary.light};
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 28px 0 4px;
  }

  .text {
    color: ${grey.darker};
    font-size: 18px;
    font-weight: 400;
    line-height: 2;
    margin: 0 auto;
    max-width: 330px;
  }

  .button {
    background-color: transparent;
    border: 2px solid ${primary.light};
    border-radius: 30px;
    color: ${primary.base};
    font-size: 15px;
    height: 50px;
    letter-spacing: 2px;
    line-height: 1;
    margin-top: 24px;
    padding: 0 28px;
    text-transform: uppercase;

    :hover {
      background-color: ${primary.light};
      color: ${light};

      a {
        color: ${light};
        font-weight: bold;
      }
    }
  }
`
