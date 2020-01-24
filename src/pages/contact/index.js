import React from 'react'

import SEO from 'Components/seo'
// import { Container } from 'Elements'
import FullWidth from 'Layouts/main/full-width'

// import { ContactForm } from './_form'
import { Hero } from './_hero'
import { ContactComp as Contact } from './_contact'
import { Form } from './_form'

const ContactPage = () => (
  <FullWidth>
    <SEO title="Contact" />
    <Hero />
    <Contact />
    <Form />
  </FullWidth>
)

export default ContactPage
