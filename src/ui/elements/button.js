import styled from 'styled-components'

import { button as defaultButton } from 'Theme/defaults'

export const Button = styled.button`
  appearance: button;

  cursor: pointer;

  display: inline-block;

  height: 32px;
  line-height: 1.499;

  position: relative;

  touch-action: manipulation;

  white-space: nowrap;
  user-select: none;

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  ${defaultButton}
`
