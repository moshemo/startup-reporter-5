import styled from 'styled-components'
import { Link } from 'gatsby'
import sharedTheme from '../theme'

// ------- CONST -------
const {
  colors: { dark, grey },
} = sharedTheme

// ------- STYLES -------
export const List = styled.div.attrs({
  className: 'list',
})`
  padding-top: 48px;
  padding-bottom: 18px;

  border-bottom: 1px solid ${grey.light};
`

export const ListHeader = styled(Link).attrs({
  className: 'list-header',
})`
  color: ${grey.darker};
  display: block;
  font-size: 14px;
  max-width: 320px;
  padding-left: 32px;
  padding-right: 32px;

  :focus,
  :hover {
    color: ${dark};
    outline: 0;
  }
`

export const ListItem = styled(Link).attrs({
  className: 'list-item',
})`
  border-radius: 2px;
  display: block;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;

  :focus,
  :hover {
    background-color: ${grey.lighter};
    outline: 0;
  }
`

export const ListTitle = styled.h4.attrs({
  className: 'list-title',
})`
  color: ${dark};
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 2px;
  text-decoration: none;
  cursor: pointer;
`
export const ListExcerpt = styled.div.attrs({
  className: 'list-excerpt',
})`
  color: ${grey.darker};
  font-size: 15px;
  line-height: 1.375;
`
