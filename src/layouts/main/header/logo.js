import React from 'react'
import styled from 'styled-components'

import { Link } from 'Elements'
import { grey, primary } from 'Vars'

export const Logo = () => <LogoBase to="/">SR</LogoBase>

export const LogoBase = styled(Link)`
  background-color: ${grey.m800};
  border-radius: 100%;
  color: ${grey.m100};
  font-size: 17px;
  height: 40px;
  width: 40px;
  padding: 8px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${primary.m700};
    color: ${grey.m100};
  }
`
