import styled from 'styled-components'

import mainTheme from '../../../theme'

// ------- CONST -------
const {
  breakpoints: { md },
  colors: { primary },
} = mainTheme

// ------- STYLES -------
export const Header = styled.header`
  background-color: ${primary.dark};
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${md}) {
    padding: 0 64px;
  }
`
