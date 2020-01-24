import styled from 'styled-components'

import { colors } from 'Vars'

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid ${colors.grey.m200};
  /* border-radius: 4px; */
  /* box-shadow: none; */
  box-sizing: border-box;
  height: 36px;
  padding: 8px 12px;

  ::placeholder {
    color: ${colors.grey.m400};
  }
`

export const Textarea = styled.textarea`
  background-color: #fff;
  border: 1px solid ${colors.grey.m200};
  box-sizing: border-box;
  height: 96px;
  padding: 8px 12px;

  ::placeholder {
    color: ${colors.grey.m400};
  }
`
