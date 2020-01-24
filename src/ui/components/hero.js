import React from 'react'
import styled from 'styled-components'

import { above } from 'Vars'

export const MediaHero = ({ children, className, media }) => (
  <Base className={className}>
    <div className="content">{children}</div>
    <Media className="media">{media}</Media>
  </Base>
)

// ------- STYLES -------
const Base = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  align-items: center;

  ${above.lg`
    grid-template-columns: 5fr 4fr;
  `}
`

const Media = styled.div`
  /* padding: 32px; */

  ${above.md`
    padding-left: 32px;
  `}

  ${above.xl`
    padding: 32px;
  `}
`
