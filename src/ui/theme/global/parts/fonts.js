import { css } from 'styled-components'

import { grey, fontSizes } from 'Theme'

export const Fonts = css`
  small {
    font-size: ${fontSizes.small};
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: ${grey.m900};
    font-weight: 700;
  }
`
