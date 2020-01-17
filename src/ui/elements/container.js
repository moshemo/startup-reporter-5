import styled from 'styled-components'
import { breakpoints } from 'Vars'

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: ${breakpoints.xs}) {
    max-width: 400px;
  }
  @media (min-width: ${breakpoints.sm}) {
    max-width: 720px;
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: 960px;
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: 1140px;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }
`
