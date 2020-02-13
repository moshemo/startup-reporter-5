import React from 'react'
import PropTypes from 'prop-types'
import BaseLayout from './base'
import { ThemeProvider } from 'styled-components'
import mainTheme from 'Themes/main/theme'
import {
  BannerAd,
  Content,
  FooterContent,
  FooterCopyright,
  FooterSignup,
  Header,
  Logo,
  Main,
  Menu,
  Mobile,
  NewsArticles,
  Search,
  Sidebar,
  Signup,
} from 'Themes/main'

const MainLayout = ({ children, sidebar }) => (
  <BaseLayout>
    <ThemeProvider theme={mainTheme}>
      <Header>
        <Logo to="/">SP</Logo>
        <Menu />
        <Mobile />
      </Header>
      <Content>
        <Main>{children}</Main>
        {sidebar && (
          <Sidebar>
            <Search />
            <Signup />
            <NewsArticles />
            <BannerAd />
          </Sidebar>
        )}
      </Content>
      <footer>
        <FooterSignup />
        <FooterContent />
        <FooterCopyright />
      </footer>
    </ThemeProvider>
  </BaseLayout>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
