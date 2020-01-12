import { css } from 'styled-components'

import { code, fonts, fontSizes, grey } from 'Theme'

export const Code = css`
  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: ${fonts.code};
  }

  code {
    background-color: ${grey.m100};
    color: ${code};
    font-size: ${fontSizes.small};
    font-weight: 400;
    padding: 0.25em 0.5em;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: ${grey.m100};
    color: ${grey.m800};
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
  }

  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
  }
`
