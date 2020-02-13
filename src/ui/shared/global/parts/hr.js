import { css } from 'styled-components'

import sharedTheme from 'Shared/theme'

const {
  colors: { grey },
} = sharedTheme

export const Hr = css`
  hr {
    background-color: ${grey.m100};
    border: none;
    display: block;
    height: 2px;
    margin: 0;
  }
`
