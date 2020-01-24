import React from 'react'

import SEO from 'Components/seo'
import { FaqComp } from './_faq'
import { Features } from './_features'
import { Signup } from './_signup'

import FullWidth from 'Layouts/main/full-width'

const NewsletterPage = () => (
  <FullWidth>
    <SEO title="Newsletter" />
    <Signup />
    <Features />
    <FaqComp />
  </FullWidth>
)

export default NewsletterPage
