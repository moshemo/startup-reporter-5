import React from 'react'
import styled, { css } from 'styled-components'

import { grey } from 'Theme'

console.log('grey - defaults 4', grey)

export const antButton = styled.button`
  background-color: #fff;
  background-image: none;
  border: 1px solid transparent;
  border-color: #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);

  color: ${grey.m800};

  font-size: 15px;

  outline: 0;
  padding: 0 16px;

  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  :active,
  :focus {
    outline: 0;
  }

  :active {
    box-shadow: none;
    text-decoration: none;
  }
`
