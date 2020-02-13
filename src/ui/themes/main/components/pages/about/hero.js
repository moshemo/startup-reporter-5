import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

const {
  breakpoints: { md, lg, xl },
} = mainTheme

export const AboutHero = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  align-items: center;

  @media (min-width: ${lg}) {
    grid-template-columns: 5fr 4fr;
  }
`

export const AboutHeroContent = styled.div``

export const AboutHeroVideo = styled.div`
  /* padding: 32px; */

  @media (min-width: ${md}) {
    padding-left: 32px;
  }

  @media (min-width: ${xl}) {
    padding: 32px;
  }
`
