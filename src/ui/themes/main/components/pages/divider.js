import styled from 'styled-components'
import mainTheme from '../../theme'

const {
  colors: { accent },
} = mainTheme

export const Divider = styled.div`
  border-top: 3px solid ${accent.base};
  height: 2px;
  width: 100px;
  margin: 24px auto 40px;
`
