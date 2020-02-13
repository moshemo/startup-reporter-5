import { css } from 'styled-components'

import sharedTheme from 'Shared/theme'

const {
  colors: { grey },
} = sharedTheme

export const Table = css`
  table td,
  table th {
    text-align: left;
    vertical-align: top;
  }

  table th {
    color: ${grey.m900};
  }
`
