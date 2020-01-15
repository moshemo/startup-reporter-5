import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button, Input } from 'Elements'

export const NewsletterSignupForm = ({
  buttonText,
  placeholderEmail,
  placeholderName,
}) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Input
        type="text"
        name="Name"
        placeholder={placeholderName || 'Name'}
        ref={register}
        className="input name"
      />
      {errors.name && <p className="error name">{errors.name.message}</p>}

      <Input
        type="email"
        name="Email"
        placeholder={placeholderEmail || 'Email'}
        ref={register}
        className="input age"
      />
      {errors.name && <p className="error age">{errors.name.message}</p>}

      <Button type="button" className="button">
        {buttonText || 'Signup'}
      </Button>
    </form>
  )
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string('Please enter a valid email address')
    .required('Email is required'),
})
