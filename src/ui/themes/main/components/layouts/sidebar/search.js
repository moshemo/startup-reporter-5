import React from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import mainTheme from '../../../theme'

import { SearchForm } from 'Forms'

export const Search = props => (
  <SearchWrapper>
    <SearchBar buttonText="Search" before={<SearchIcon />} />
  </SearchWrapper>
)

// ------- CONST -------
const {
  colors: { grey, light, offWhite, primary },
} = mainTheme

// ------- STYLES -------
const SearchWrapper = styled.div`
  background-color: ${grey.lighter};
  padding: 16px 24px;
`

const SearchBar = styled(SearchForm)`
  display: flex;
  align-items: center;
  position: relative;

  .input {
    background-color: ${offWhite};
    border: 1px solid ${grey.light};
    border-right: 0;
    border-radius: 0;
    padding: 8px 16px 8px 40px;
    transition: border 0.3s;

    :focus,
    :hover {
      outline: 0;
    }

    :focus {
      background-color: ${offWhite};
    }
  }

  .button {
    background-color: ${primary.base};
    border: none;
    border-radius: 0;
    color: ${light};
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
      background-color: ${primary.dark};
    }
    :hover {
      background-color: ${primary.light};
    }
  }
`

const SearchIcon = styled(MdSearch)`
  color: ${grey.dark};
  left: 12px;
  position: absolute;
`
