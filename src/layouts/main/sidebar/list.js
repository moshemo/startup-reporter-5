import styled from 'styled-components'

import { Link } from 'Elements'
import { colors } from 'Vars'

export const List = styled.div`
  padding-bottom: 18px;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.grey.m300};
  }
`

export const ListHeader = styled(Link)`
  color: ${colors.grey.m600};
  display: block;
  font-size: 14px;
  margin-bottom: 18px;
  margin-top: 48px;
  max-width: 320px;
  padding-left: 32px;
  padding-right: 32px;
`

export const ListItem = styled(Link)`
  border-radius: 2px;
  display: block;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;

  :hover {
    background-color: ${colors.grey.m200};
  }
`

export const ListTitle = styled.h4`
  color: ${colors.grey.m800};
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 2px;
  text-decoration: none;
  cursor: pointer;
`
export const ListExcerpt = styled.div`
  color: ${colors.grey.m600};
  font-size: 15px;
  line-height: 1.375;
`

// import React from 'react'

// import { List as ListComp } from 'Components'

// export const List = props => (
//   <ListComp
//     listHeader="Header"
//     listTitle="Title"
//     listExcerpt="This is the excerprt"
//   />
// )
