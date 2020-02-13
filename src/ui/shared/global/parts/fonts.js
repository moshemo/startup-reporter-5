import { css } from 'styled-components'

import sharedTheme from 'Shared/theme'

const {
  fontSizes,
  colors: { grey },
} = sharedTheme

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
