import { css } from 'styled-components'

import { link } from 'Theme'

export const Link = css`
  a {
    color: ${link.base};
    cursor: pointer;
    text-decoration: none;
  }

  a strong {
    color: currentColor;
  }

  a:hover {
    color: ${link.hover};
  }
`
