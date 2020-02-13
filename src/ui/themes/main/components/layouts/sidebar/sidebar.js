import styled from 'styled-components'
import mainTheme from '../../../theme'

const {
  breakpoints: { lg },
  colors: { light },
} = mainTheme

export const Sidebar = styled.div`
  display: none;

  @media (min-width: ${lg}) {
    display: block;
    background-color: ${light};
    min-height: 100vh;
    min-width: 400px;
    width: 400px;
  }
`
