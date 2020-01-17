import styled from 'styled-components'

import { colors } from 'Vars'

export const Button = styled.button`
  appearance: button;
  background-color: ${colors.grey.m700};
  border: 0;
  border-radius: 0;
  box-shadow: none;
  color: ${colors.grey.m100};
  cursor: pointer;

  font-size: 15px;

  padding: 12px 24px;
  outline: 0;

  text-align: center;
  touch-action: manipulation;

  white-space: nowrap;

  :active,
  :hover,
  :focus {
    outline: 0;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
`
