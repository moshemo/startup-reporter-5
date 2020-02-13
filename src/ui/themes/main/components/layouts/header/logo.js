import { Link } from 'gatsby'
import styled from 'styled-components'

import mainTheme from '../../../theme'

// ------- CONST -------
const {
  colors: { dark, light, primary },
  fontSizes,
} = mainTheme

export const Logo = styled(Link)`
  background-color: ${dark};
  border-radius: 100%;
  color: ${light};
  font-size: ${fontSizes.md};
  height: 40px;
  width: 40px;
  padding: 8px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${primary.base};
    color: ${light};
  }
`
