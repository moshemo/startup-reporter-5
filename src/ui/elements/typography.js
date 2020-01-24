import styled from 'styled-components'

import { breakpoints as bp, colors } from 'Vars'

export const Subtitle = styled.p.attrs({
  className: 'subtitle',
})`
  color: ${colors.primary.m700};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.625;
  margin-bottom: 10px;
  text-transform: uppercase;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`

export const Title = styled.h2.attrs({
  className: 'title',
})`
  color: ${colors.grey.m800};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.375;
  margin-bottom: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 32px;
  }
`

export const Blurb = styled.p.attrs({
  className: 'blurb',
})`
  color: ${colors.grey.m500};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
`

export const Text = styled.p.attrs({
  className: 'blurb',
})`
  color: ${colors.grey.m500};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.625;
`
