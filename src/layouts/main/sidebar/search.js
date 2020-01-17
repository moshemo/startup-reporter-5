import React from 'react'
import styled from 'styled-components'

import { MdSearch } from 'react-icons/md'

import { Search as SearchComp } from 'Components'
import { breakpoints as bp, colors } from 'Vars'

export const Search = props => (
  <SearchWrapper>
    <SearchBase buttonText="Search" before={<SearchIcon />} />
  </SearchWrapper>
)

const SearchWrapper = styled.div`
  background-color: ${colors.grey.m200};
  padding: 16px 24px;
`

const SearchBase = styled(SearchComp)`
  display: flex;
  align-items: center;
  position: relative;

  .input {
    background-color: ${colors.grey.m100};
    border: 1px solid ${colors.grey.m300};
    border-right: 0;
    border-radius: 0;
    padding: 8px 16px 8px 40px;
    transition: border 0.3s;

    :focus,
    :hover {
      outline: 0;
    }

    :focus {
      background-color: ${colors.grey.m50};
    }
  }

  .button {
    background-color: ${colors.primary.m700};
    border: none;
    border-radius: 0;
    color: ${colors.grey.m100};
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.5px;
    height: 36px;
    line-height: 36px;
    min-width: 88px;
    outline: 0;
    padding: 0 16px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    :focus {
      background-color: ${colors.primary.m800};
    }
    :hover {
      background-color: ${colors.primary.m600};
    }
  }
`

const SearchIcon = styled(MdSearch)`
  color: ${colors.grey.m500};
  left: 12px;
  position: absolute;
`
