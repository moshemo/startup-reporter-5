import React, { useState } from 'react'
import styled from 'styled-components'

import { Icon, Menu as AntMenu } from 'antd'

export const MenuComp = props => (
  <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
    <Menu.Item key="1">
      <Icon type="user" />
      <span>nav 1</span>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="video-camera" />
      <span>nav 2</span>
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="upload" />
      <span>nav 3</span>
    </Menu.Item>
  </Menu>
)

// ------- STYLES -------
const Menu = styled(AntMenu)`
  background-color: inherit;
`
