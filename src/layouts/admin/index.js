import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLayout from 'Layouts/base'

import { Icon, Layout } from 'antd'
import { MenuComp as Menu } from './menu'

// ------- CONST -------
const { Header: AntHeader, Sider: AntSider, Content: AntContent } = Layout

// ------- DEFAULT COMPONENT -------
const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const triggerType = collapsed ? 'menu-unfold' : 'menu-fold'
  const triggerClick = () => setCollapsed(state => !state)

  return (
    <BaseLayout>
      <Base>
        <Sider collapsible collapsed={collapsed} trigger={null} width="280">
          <Logo />
          <Menu />
        </Sider>
        <Layout>
          <Header>
            <Trigger type={triggerType} onClick={triggerClick} />
          </Header>
          <Content>{children}</Content>
        </Layout>
      </Base>
    </BaseLayout>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout

// ------- STYLES -------
const Base = styled(Layout)`
  .ant-layout {
    min-height: 100vh;
  }
`

const Header = styled(AntHeader)`
  background-color: #fff;
  padding: 0 24px;
`

const Logo = styled.div`
  height: 32px;
  background: rebeccapurple;
  margin: 16px;
`

const Sider = styled(AntSider)`
  background-color: #212121;
`

const Trigger = styled(Icon)`
  cursor: pointer;
  font-size: 20px;
  line-height: 64px;
  padding: 0 16px;
  transition: color 0.3s;

  :hover {
    color: #1890ff;
  }
`

const Content = styled(AntContent)`
  background: #fff;
  margin: 24px 16px;
  min-height: 280px;
  padding: 24px;
`
