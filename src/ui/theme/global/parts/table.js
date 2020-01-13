import { css } from 'styled-components'

import { grey } from 'Vars'

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
