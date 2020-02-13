import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from 'Shared/components'

export const SearchForm = ({
  buttonText,
  before,
  className,
  after,
  placeholder,
  ...props
}) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {before}
      <Input
        type="search"
        placeholder={placeholder || 'Search'}
        name="Search"
        ref={register}
        className="input"
      />
      {after}

      <Button type="button" className="button">
        {buttonText}
      </Button>
    </form>
  )
}
