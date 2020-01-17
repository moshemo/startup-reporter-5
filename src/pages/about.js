import React from 'react'
import styled from 'styled-components'

import MainLayout from 'Layouts/main'
import SEO from 'Components/seo'

import { breakpoints as bp, colors } from 'Vars'

import { List } from './_modules/list'
import { ListWrapper, NewsBase } from './_styles'

const AboutPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h2>About</h2>
  </MainLayout>
)

export default AboutPage

// const HomeBase = styled.main`
//   margin: 48px auto;
//   width: 100%;
// `

// const ListWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   justify-content: space-evenly;
//   padding: 0 24px;
//   max-width: 100;
// `
