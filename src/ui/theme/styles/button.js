import { css } from 'styled-components'
import styledMap from 'styled-map'

import { grey, primary } from 'Vars'

const bgColorMap = styledMap`
  link: transparent;
  default: #fff;
`

const borderColorMap = styledMap`
  link: transparent;
  default: ${grey.m400};
`

const colorMap = styledMap`
  link: ${primary.m600};
  default: ${grey.m800};
`

export const antButton = css`
  background-color: ${bgColorMap};
  border-color: ${borderColorMap};
  color: ${colorMap};

  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);

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
    border-color: ${primary.m700};
    color: ${primary.m700};

    box-shadow: none;
    text-decoration: none;
  }

  :focus,
  :hover {
    border-color: ${primary.m500};
    color: ${primary.m500};

    text-decoration: none;
  }
`
