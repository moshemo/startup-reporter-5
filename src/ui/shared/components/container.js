import styled from 'styled-components'
import sharedTheme from '../theme'

const {
  breakpoints: { xs, sm, md, lg, xl },
} = sharedTheme

export const Container = styled.div.attrs({
  className: 'container',
})`
  margin: 0 auto;

  @media (min-width: ${xs}) {
    max-width: 400px;
  }
  @media (min-width: ${sm}) {
    max-width: 720px;
  }
  @media (min-width: ${md}) {
    max-width: 960px;
  }
  @media (min-width: ${lg}) {
    max-width: 1140px;
  }
  @media (min-width: ${xl}) {
    max-width: 1280px;
  }
`
