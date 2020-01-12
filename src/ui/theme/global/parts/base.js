import { css } from 'styled-components'

import { fonts, fontSizes, grey } from 'Theme'

export const Base = css`
  * {
    background-repeat: no-repeat;
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    :before,
    :after {
      box-sizing: inherit;
    }
  }

  html {
    background-color: ${grey.m50};
    box-sizing: border-box;
    font-size: ${fontSizes.html};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-size: ${fontSizes.base};
  }

  body {
    color: ${grey.m900};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: ${fonts.body};
  }

  hr {
    background-color: ${grey.m100};
    border: none;
    display: block;
    height: 2px;
    margin: 0;
  }
`
