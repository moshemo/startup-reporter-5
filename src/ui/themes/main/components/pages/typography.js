import styled from 'styled-components'
import mainTheme from '../../theme'

const {
  breakpoints: { md },
  colors: { dark, grey, primary },
} = mainTheme

export const Subtitle = styled.p.attrs({
  className: 'subtitle',
})`
  color: ${primary.base};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.625;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (min-width: ${md}) {
    font-size: 18px;
  }
`

export const Title = styled.h2.attrs({
  className: 'title',
})`
  color: ${dark};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.375;
  margin-bottom: 20px;

  @media (min-width: ${md}) {
    font-size: 32px;
  }
`

export const Text = styled.p.attrs({
  className: 'text',
})`
  color: ${grey.dark};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
`
