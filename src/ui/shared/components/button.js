import styled from 'styled-components'

export const Button = styled.button.attrs({
  className: 'button',
})`
  appearance: button;
  border: 0;
  border-radius: 0;
  box-shadow: none;
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
