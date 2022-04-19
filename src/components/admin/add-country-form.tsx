import React, { useState } from 'react'
import styles from './add-country-form.module.css'
import {
  useAddCountryMutation,
  ICountry,
  createCountryId,
} from '../countries/countries-api'
import { useForm, SubmitHandler } from 'react-hook-form'
import CustomButton from '../custom-button/custom-button'

export const AddCountryForm = () => {
  const [addCountry] = useAddCountryMutation()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICountry>()

  const onSubmit: SubmitHandler<ICountry> = (data: ICountry) => {
    const country: ICountry = {
      id: createCountryId(data.name),
      name: data.name,
      description: data.description,
      summary: data.summary,
      imageUrl: `${createCountryId(data.name)}.jpg`,
    }
    addCountryToStore(country)
  }

  const addCountryToStore = async (country: ICountry) => {
    await addCountry(country)
    setShowSuccessMessage(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.countryForm}>
      { showSuccessMessage && <p className='success'>Success, the country has been added!</p>}
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        className="input"
        id="name"
        autoFocus
        {...register('name', {
          required: true,
          maxLength: 20,
          pattern: /^[a-zA-Z\s]*$/
        })}
      />
      {errors.name && <span className="error">Name is required</span>}
      <label className="label" htmlFor="summary">
        Summary
      </label>
      <textarea
        className="textarea"
        id="summary"
        {...register('summary', { required: true, maxLength: 100 })}
      />
      {errors.description && (
        <span className="error">Description is required</span>
      )}
      <label className="label" htmlFor="description">
        Description
      </label>
      <textarea
        className="textarea"
        id="description"
        rows={5}
        {...register('description', { required: true, maxLength: 256 })}
      />
      {errors.description && (
        <span className="error">Description is required</span>
      )}
      <div className={styles.buttonContainer}>
        <CustomButton
          type="button"
          value="Add Country"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  )
}

export default AddCountryForm
