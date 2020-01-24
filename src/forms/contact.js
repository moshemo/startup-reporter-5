import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button, Input, Textarea } from 'Elements'

export const ContactForm = ({
  buttonText,
  className,
  placeholderEmail,
  placeholderMessage,
  placeholderName,
}) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
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

      <Textarea
        name="Message"
        placeholder={placeholderMessage || 'Message'}
        ref={register}
        className="textarea message"
      />

      <Button type="button" className="button">
        {buttonText || 'Submit'}
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
