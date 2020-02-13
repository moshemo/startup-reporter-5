import styled from 'styled-components'
import mainTheme from 'Themes/main/theme'

const {
  breakpoints: { md, lg, xl },
} = mainTheme

export const OurStory = styled.section`
  margin-top: 108px;
  .title,
  .subtitle {
    text-align: center;
  }
`

export const OurStoryText = styled.p`
  color: #424242;

  column-count: 3;
  column-gap: 32px;
  column-width: 240px;

  font-size: 18px;
  font-weight: 300;
  line-height: 1.3em;
  margin-bottom: 50px;
`
